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

/* Recursively builds a node: a card, plus its parents stacked to the right. */
function buildNode(person) {
  const node = document.createElement("div");
  node.className = "node";

  const card = document.createElement("button");
  card.type = "button";
  card.className = `card sex-${person.sex || "u"}`;
  card.innerHTML = `
    <span class="avatar">${initials(person.name)}</span>
    <span class="card-text">
      <span class="name">${person.name}</span>
      <span class="dates">${lifespan(person)}</span>
      ${person.spouse ? `<span class="spouse">⚭ ${person.spouse.name}</span>` : ""}
    </span>`;
  card.addEventListener("click", () => openBio(person));
  node.appendChild(card);

  if (person.father || person.mother) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toggle";
    toggle.setAttribute("aria-label", "Toggle ancestors");
    toggle.textContent = "−";

    const branch = document.createElement("div");
    branch.className = "branch";
    if (person.father) branch.appendChild(buildNode(person.father));
    if (person.mother) branch.appendChild(buildNode(person.mother));

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const collapsed = node.classList.toggle("collapsed");
      toggle.textContent = collapsed ? "+" : "−";
    });

    node.appendChild(toggle);
    node.appendChild(branch);
  }
  return node;
}

/* Bio panel */
const bio = document.getElementById("bio");
function openBio(person) {
  document.getElementById("bioName").textContent = person.name;
  document.getElementById("bioDates").textContent = lifespan(person) || "Dates unknown";
  document.getElementById("bioRelation").textContent = person.relation || "";
  const notes = [];
  if (person.spouse) notes.push(`Married to ${person.spouse.name}.`);
  if (person.notes) notes.push(person.notes);
  document.getElementById("bioNotes").textContent = notes.join(" ");
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
function renderFamily(key) {
  treeEl.innerHTML = "";
  treeEl.appendChild(buildNode(FAMILIES[key].root));
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.family === key);
    t.setAttribute("aria-selected", t.dataset.family === key ? "true" : "false");
  });
}

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
    const t = n.querySelector(":scope > .toggle");
    if (t) t.textContent = "−";
  });
});
document.getElementById("collapseAll").addEventListener("click", () => {
  treeEl.querySelectorAll("#tree > .node > .branch > .node").forEach((n) => {
    n.classList.add("collapsed");
    const t = n.querySelector(":scope > .toggle");
    if (t) t.textContent = "+";
  });
});

/* Initial render */
renderFamily("gen");
