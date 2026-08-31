/* Renders the pedigree trees with a tab per side, plus the bio panel. */

function lifespan(p) {
  if (!p.born && !p.died) return "";
  const b = p.born || "?";
  if (p.died === "Living") return `${b}–Living`;
  return p.died ? `${b}–${p.died}` : `${b}–`;
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
  const avatar = person.photo
    ? `<span class="avatar"><img src="${person.photo}" alt="" loading="lazy"
         onerror="this.parentNode.textContent='${initials(person.name)}'"></span>`
    : `<span class="avatar">${initials(person.name)}</span>`;
  const hasExtra =
    person.notes ||
    (person.links && person.links.length) ||
    (person.records && person.records.length);
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

/* Bio panel */
const bio = document.getElementById("bio");
function openBio(person) {
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

  // Records (structured, cited historical records)
  const recEl = document.getElementById("bioRecords");
  recEl.innerHTML = "";
  if (person.records && person.records.length) {
    const head = document.createElement("h3");
    head.className = "rec-head";
    head.textContent = "Records & sources";
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
      ul.appendChild(li);
    });
    recEl.appendChild(ul);
  }

  // Links
  const linksEl = document.getElementById("bioLinks");
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
}
document.getElementById("bioClose").addEventListener("click", closeBio);
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

function renderFamily(key) {
  treeEl.innerHTML = "";
  treeEl.appendChild(buildNode(FAMILIES[key].root));
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.family === key);
    t.setAttribute("aria-selected", t.dataset.family === key ? "true" : "false");
  });
  // Center the pannable canvas on the root person (wide screens only).
  requestAnimationFrame(() => {
    if (isDesktop()) {
      scroller.scrollLeft = 0;
      scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) / 2;
    } else {
      scroller.scrollTop = 0;
    }
  });
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

/* Initial render */
renderFamily("gen");
