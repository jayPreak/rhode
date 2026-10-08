# Summer, Packaged.

A student visual identity website interpreting **rhode Summer Station '26**.
Independent student project, not affiliated with or endorsed by rhode.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit

- **All text + image paths:** `content/site.js`
- **Images:** drop files into `public/images/` (exact names in `public/images/README.md`). Missing images show a labelled placeholder.
- **Colours / type scale:** `:root` tokens at the top of `app/globals.css`
- **Sections:** `components/sections/*.jsx`, ordered in `app/page.jsx`

## Deploy (Vercel)

Import the GitHub repo at vercel.com/new. Framework is auto-detected as Next.js, no settings needed.
