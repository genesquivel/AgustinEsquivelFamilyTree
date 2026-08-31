# Photos

Put family photos in this folder, then point a person's `photo` field in
`tree-data.js` at the file.

**Steps**
1. Add an image here, e.g. `lolita-esquivel.jpg` (JPG or PNG; square-ish crops
   look best, and keep files under ~500 KB so the page stays fast).
2. In `tree-data.js`, set that person's field:

   ```js
   photo: "images/lolita-esquivel.jpg",
   ```

3. Commit/push (or re-drag the folder to Netlify). The photo appears on the
   card and in the popup automatically.

If a `photo` points to a file that isn't here yet, the site quietly falls back
to the person's initials — so it's always safe to add the path first and the
image later.
