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
| `netlify.toml` | Netlify publish settings |
