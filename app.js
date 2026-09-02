/* Renders the pedigree trees with a tab per side, plus the bio panel. */

function lifespan(p) {
  if (!p.born && !p.died) return "";
  const b = p.born || "?";
  if (p.died === "Living") return `${b}–Living`;
  return p.died ? `${b}–${p.died}` : `${b}–`;
}

/* Append a PDF page anchor (#page=N) to a source URL for deep-linking.
   Harmless if the target isn't a PDF — the browser just opens the page. */
function pageUrl(url, page) {
  if (!page) return url;
  return url.indexOf("#") === -1 ? url + "#page=" + page : url;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/* ---- Shareable per-person IDs & deep links ----
   Each person gets a URL slug (from an explicit `id` in the data, or derived
   from their name). Links look like  …/#p/alejandro-ver-albano  and open
   straight to that card. */
function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents (á, é, ñ, …)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const personIndex = {}; // id -> { key, person }
function assignIds() {
  const used = new Set();
  Object.keys(FAMILIES).forEach((key) => {
    (function walk(p) {
      if (!p) return;
      const base = p.id || slugify(p.name);
      let id = base;
      let i = 2;
      while (used.has(id)) id = base + "-" + i++;
      used.add(id);
      p.__id = id;
      personIndex[id] = { key, person: p };
      walk(p.father);
      walk(p.mother);
    })(FAMILIES[key].root);
  });
}
assignIds();

function linkFor(id) {
  return location.origin + location.pathname + "#p/" + id;
}
function parseHash() {
  const m = location.hash.match(/^#p\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (e2) {
      return false;
    }
  }
}

/* Recursively builds a node: a tappable card row, plus its parents nested
   below (mobile) or stacked to the right (wide screens). */
function buildNode(person) {
  const node = document.createElement("div");
  node.className = "node";

  const row = document.createElement("div");
  row.className = "row";

  const card = document.createElement("div");
  card.className = `card sex-${person.sex || "u"}`;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  if (person.__id) card.dataset.id = person.__id;
  const avatar = person.photo
    ? `<span class="avatar"><img src="${person.photo}" alt="" loading="lazy"
         onerror="this.parentNode.textContent='${initials(person.name)}'"></span>`
    : `<span class="avatar">${initials(person.name)}</span>`;
  const hasExtra =
    person.notes ||
    (person.links && person.links.length) ||
    (person.records && person.records.length) ||
    (person.siblings && person.siblings.length) ||
    (person.children && person.children.length);
  card.innerHTML = `
    ${avatar}
    <span class="card-text">
      <span class="name">${person.name}</span>
      <span class="dates">${lifespan(person)}</span>
      ${person.spouse ? `<span class="spouse">⚭ ${person.spouse.name}</span>` : ""}
    </span>
    ${hasExtra ? '<span class="dot" title="Has notes or links"></span>' : ""}`;
  const open = () => openBio(person);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });
  row.appendChild(card);
  node.appendChild(row);

  if (person.father || person.mother) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toggle";
    toggle.setAttribute("aria-label", "Show or hide parents");
    toggle.setAttribute("aria-expanded", "true");
    setToggle(toggle, false);
    row.appendChild(toggle);

    const branch = document.createElement("div");
    branch.className = "branch";
    if (person.father) branch.appendChild(buildNode(person.father));
    if (person.mother) branch.appendChild(buildNode(person.mother));

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const collapsed = node.classList.toggle("collapsed");
      setToggle(toggle, collapsed);
    });

    node.appendChild(branch);
  }
  return node;
}

/* Keep the toggle glyph and aria state in sync. */
function setToggle(toggle, collapsed) {
  toggle.textContent = collapsed ? "+" : "−";
  toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
}

/* Render a "Siblings"/"Children" list of relatives who aren't on the pedigree.
   Each entry: { name, life, pid (FamilySearch id) or url }. */
function renderRelatives(container, heading, list) {
  if (!list || !list.length) return;
  const h = document.createElement("h3");
  h.className = "rec-head";
  h.textContent = heading;
  container.appendChild(h);
  const ul = document.createElement("ul");
  ul.className = "rel-list";
  list.forEach((r) => {
    const li = document.createElement("li");
    li.className = "rel";
    const href = r.url || (r.pid ? "https://www.familysearch.org/tree/person/details/" + r.pid : "");
    const nameEl = document.createElement(href ? "a" : "span");
    nameEl.className = "rel-name";
    nameEl.textContent = r.name;
    if (href) {
      nameEl.href = href;
      nameEl.target = "_blank";
      nameEl.rel = "noopener noreferrer";
    }
    li.appendChild(nameEl);
    if (r.life) {
      const s = document.createElement("span");
      s.className = "rel-life";
      s.textContent = r.life;
      li.appendChild(s);
    }
    if (r.note) {
      const n = document.createElement("div");
      n.className = "rel-note";
      n.textContent = r.note;
      li.appendChild(n);
    }
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

/* Bio panel */
const bio = document.getElementById("bio");
function openBio(person) {
  bio.dataset.personId = person.__id || "";
  bio.dataset.personName = person.name || "";
  resetShareButton();
  // Reflect this person in the URL so it can be copied from the address bar.
  if (person.__id) history.replaceState(null, "", "#p/" + person.__id);

  document.getElementById("bioName").textContent = person.name;
  document.getElementById("bioDates").textContent = lifespan(person) || "Dates unknown";
  document.getElementById("bioRelation").textContent = person.relation || "";

  // Photo
  const photoEl = document.getElementById("bioPhoto");
  if (person.photo) {
    photoEl.innerHTML = `<img src="${person.photo}" alt="Photo of ${person.name}"
      onerror="this.closest('.bio-photo').style.display='none'">`;
    photoEl.style.display = "";
  } else {
    photoEl.innerHTML = "";
    photoEl.style.display = "none";
  }

  // Notes
  const notes = [];
  if (person.spouse) notes.push(`Married to ${person.spouse.name}.`);
  if (person.notes) notes.push(person.notes);
  document.getElementById("bioNotes").textContent = notes.join(" ");

  // Family (siblings and other children — people not on the pedigree)
  const famEl = document.getElementById("bioFamily");
  famEl.innerHTML = "";
  renderRelatives(famEl, "Children", person.children);
  renderRelatives(famEl, "Siblings", person.siblings);

  // Records (structured, cited historical records)
  const recEl = document.getElementById("bioRecords");
  recEl.innerHTML = "";
  if (person.records && person.records.length) {
    const head = document.createElement("h3");
    head.className = "rec-head";
    head.textContent = "Records";
    recEl.appendChild(head);

    const ul = document.createElement("ul");
    ul.className = "rec-list";
    person.records.forEach((r) => {
      const li = document.createElement("li");
      li.className = "rec";
      const meta = [r.date, r.place].filter(Boolean).join(" · ");
      const pages = [];
      if (r.printedPage) pages.push("printed p. " + r.printedPage);
      if (r.pdfPage) pages.push("PDF p. " + r.pdfPage);
      const metaLine = [meta, pages.join(", ")].filter(Boolean).join(" · ");

      const claim = document.createElement("div");
      claim.className = "rec-claim";
      claim.textContent = r.claim || "";
      li.appendChild(claim);

      if (metaLine) {
        const m = document.createElement("div");
        m.className = "rec-meta";
        m.textContent = metaLine;
        li.appendChild(m);
      }
      if (r.excerpt) {
        const ex = document.createElement("div");
        ex.className = "rec-excerpt";
        ex.textContent = "“" + r.excerpt + "”";
        li.appendChild(ex);
      }
      if (r.notes) {
        const n = document.createElement("div");
        n.className = "rec-note";
        n.textContent = r.notes;
        li.appendChild(n);
      }
      const base = r.url || person.recordsSource;
      if (base) {
        const a = document.createElement("a");
        a.className = "rec-source";
        a.href = pageUrl(base, r.pdfPage);
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = r.printedPage ? "View source · p. " + r.printedPage : "View source";
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
    recEl.appendChild(ul);
  }

  // Links
  const linksEl = document.getElementById("bioLinks");
  document.getElementById("bioLinksHead").hidden = !(person.links && person.links.length);
  linksEl.innerHTML = "";
  (person.links || []).forEach((l) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label || l.url;
    li.appendChild(a);
    linksEl.appendChild(li);
  });

  bio.hidden = false;
}
function closeBio() {
  bio.hidden = true;
  // Return the URL to a clean state (no person hash).
  if (parseHash()) history.replaceState(null, "", location.pathname + location.search);
}
document.getElementById("bioClose").addEventListener("click", closeBio);

/* Share / copy-link button */
const shareBtn = document.getElementById("bioShare");
const SHARE_LABEL = "Copy link to this person";
function resetShareButton() {
  shareBtn.textContent = SHARE_LABEL;
  shareBtn.classList.remove("done");
}
shareBtn.addEventListener("click", async () => {
  const id = bio.dataset.personId;
  if (!id) return;
  const url = linkFor(id);
  const onPhone = window.matchMedia("(max-width: 900px)").matches;
  if (navigator.share && onPhone) {
    try {
      await navigator.share({ title: bio.dataset.personName || "Family tree", url });
    } catch (e) {
      /* user dismissed the share sheet */
    }
    return;
  }
  const ok = await copyText(url);
  shareBtn.textContent = ok ? "Link copied!" : "Press Ctrl/Cmd+C to copy";
  shareBtn.classList.toggle("done", ok);
  setTimeout(resetShareButton, 2200);
});
bio.addEventListener("click", (e) => {
  if (e.target === bio) closeBio();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBio();
});

/* Render one family's tree into the #tree container */
const treeEl = document.getElementById("tree");
const scroller = document.querySelector(".tree-scroll");
const isDesktop = () => window.matchMedia("(min-width: 900px)").matches;

function renderFamily(key, focusId) {
  treeEl.innerHTML = "";
  treeEl.appendChild(buildNode(FAMILIES[key].root));
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.family === key);
    t.setAttribute("aria-selected", t.dataset.family === key ? "true" : "false");
  });
  requestAnimationFrame(() => {
    if (focusId) {
      const card = treeEl.querySelector('[data-id="' + (window.CSS ? CSS.escape(focusId) : focusId) + '"]');
      if (card) {
        card.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
        card.classList.add("highlight");
        setTimeout(() => card.classList.remove("highlight"), 2000);
      }
    } else if (isDesktop()) {
      // Center the pannable canvas on the root person (wide screens only).
      scroller.scrollLeft = 0;
      scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) / 2;
    } else {
      scroller.scrollTop = 0;
    }
  });
}

/* Open a person by their share id: switch to the right tree, reveal and
   highlight their card, and open their info panel. */
function openPerson(id) {
  const entry = personIndex[id];
  if (!entry) return false;
  renderFamily(entry.key, id);
  openBio(entry.person);
  return true;
}

/* ---- Grab-and-drag panning (wide screens) ---- */
let down = false, moved = false, startX = 0, startY = 0, startL = 0, startT = 0;

scroller.addEventListener("pointerdown", (e) => {
  if (e.button !== 0 || !isDesktop()) return;
  down = true;
  moved = false;
  startX = e.clientX;
  startY = e.clientY;
  startL = scroller.scrollLeft;
  startT = scroller.scrollTop;
});
scroller.addEventListener("pointermove", (e) => {
  if (!down) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  if (!moved && Math.hypot(dx, dy) > 6) {
    moved = true;
    scroller.classList.add("dragging");
    scroller.setPointerCapture(e.pointerId);
  }
  if (moved) {
    scroller.scrollLeft = startL - dx;
    scroller.scrollTop = startT - dy;
    e.preventDefault();
  }
});
function endPan() {
  if (moved) {
    // Swallow the click that follows a drag so a card doesn't open.
    scroller.dataset.suppress = "1";
    setTimeout(() => delete scroller.dataset.suppress, 0);
  }
  down = false;
  moved = false;
  scroller.classList.remove("dragging");
}
scroller.addEventListener("pointerup", endPan);
scroller.addEventListener("pointercancel", endPan);
// If a drag just happened, cancel the resulting click (cards and toggles).
scroller.addEventListener(
  "click",
  (e) => {
    if (scroller.dataset.suppress) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  true
);

/* Build tabs */
const tabsEl = document.getElementById("tabs");
Object.keys(FAMILIES).forEach((key) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "tab";
  tab.dataset.family = key;
  tab.setAttribute("role", "tab");
  tab.textContent = FAMILIES[key].label;
  tab.addEventListener("click", () => renderFamily(key));
  tabsEl.appendChild(tab);
});

/* Expand / collapse all */
document.getElementById("expandAll").addEventListener("click", () => {
  treeEl.querySelectorAll(".node.collapsed").forEach((n) => {
    n.classList.remove("collapsed");
    const t = n.querySelector(":scope > .row > .toggle");
    if (t) setToggle(t, false);
  });
});
document.getElementById("collapseAll").addEventListener("click", () => {
  treeEl.querySelectorAll("#tree > .node > .branch > .node").forEach((n) => {
    n.classList.add("collapsed");
    const t = n.querySelector(":scope > .row > .toggle");
    if (t) setToggle(t, true);
  });
});

/* Open a person from a shared link (back/forward or a pasted URL). */
window.addEventListener("hashchange", () => {
  const id = parseHash();
  if (id && personIndex[id]) openPerson(id);
  else if (!id && !bio.hidden) closeBio();
});

/* Initial render — honor a #p/<id> deep link if present. */
const startId = parseHash();
if (startId && personIndex[startId]) {
  openPerson(startId);
} else {
  renderFamily("gen");
}
