# Agustin–Esquivel Family Tree

A simple, static family tree website for the family of **Paolo Esquivel & Gen Agustin**.
It has two pedigree charts you can switch between with the tabs at the top:

- **Gen's family** — the Agustin & Catelo line
- **Paolo's family** — the Esquivel & Albano line

Click any person to see their dates and how they relate to you. Use the
**+ / −** buttons on a card (or *Expand all / Collapse ancestors*) to open and
close branches. The tree scrolls sideways on small screens.

## Editing the tree

All the people live in **`tree-data.js`**. Each person looks like this:

```js
{
  name: "Segundo Agustin",
  born: "1899",
  died: "",            // leave blank if unknown; use "Living" for living people
  sex: "m",            // "m" or "f" (controls the blue/rose color)
  relation: "Great-grandfather",
  notes: "Anything you'd like to add.",
  father: { ...another person... },
  mother: { ...another person... }
}
```

To add or correct someone, edit the file and commit — there is **no build step**.

### Adding photos, notes, and links (the "living archive")

This site is meant to grow over time. Any person can carry three extra fields:

```js
{
  name: "Lolita Pineda Esquivel",
  // ...
  photo: "images/lolita.jpg",          // see the images/ folder
  notes: "Teacher in Batangas. Made the best suman.",
  links: [
    { label: "FamilySearch record", url: "https://www.familysearch.org/..." },
    { label: "Baptism cert (Drive)", url: "https://drive.google.com/..." }
  ]
}
```

- **Photos** — drop the image file into the **`images/`** folder, then point
  `photo` at it. If the file isn't there yet, the card just shows initials, so
  it's always safe to add the path first. (Paolo and Gen already have photo
  slots waiting — add `images/gen-agustin.jpg` and `images/paolo-esquivel.jpg`.)
- **Notes** — any free text; shows in the popup.
- **Links** — as many as you like, to records, articles, Google Drive/Photos,
  news clippings, anything. They open in a new tab.

A small dot appears on any card that has notes or links. Click a card to see
everything.

> A couple of entries from the original charts were left out because their
> place in the tree was unclear (e.g. an extra "Doroteo O Calica" card and a
> duplicate "Juliana Sering"). Add them back in `tree-data.js` once confirmed.

## Publishing on Netlify

This is a plain HTML/CSS/JS site — nothing to build.

**Option A — connect the Git repo (recommended):**
1. Log in at [netlify.com](https://www.netlify.com) → **Add new site → Import an existing project**.
2. Choose this GitHub repository.
3. Leave the build command **empty** and set the publish directory to **`.`**
   (the included `netlify.toml` already sets this). Click **Deploy**.
4. Every push to the branch will redeploy automatically.

**Option B — drag & drop:**
Go to Netlify → **Sites**, then drag this whole folder onto the upload area.

You can rename the site and add a custom domain later under **Site settings → Domain management**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Look and feel |
| `tree-data.js` | **The family data — edit this** |
| `app.js` | Renders the tree and the info panel |
| `images/` | **Drop family photos here** |
| `netlify.toml` | Netlify publish settings |
