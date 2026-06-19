# SS Bites by Shivangi — Website

A single-page, responsive site for SS Bites (café & thali menu) built with plain HTML, CSS and JavaScript. No build step, no dependencies — just static files.

## Files
- `index.html` — page structure and all content (menu, thalis, contact, address)
- `styles.css` — styling, layout and animations
- `script.js` — sticky nav, mobile menu, scroll reveal, back-to-top

## Edit your content
- **Phone number:** search for `+91 96461 10042` and `+919646110042` in `index.html` and replace with your final number. *(Note: the number you gave had 11 digits — I used `+91 96461 10042`. Update it to the correct 10-digit number.)*
- **Menu items / prices:** edit the `<li>` rows inside the `.menu-list` lists in `index.html`.
- **Thali items:** edit the `.thali-card` blocks.
- **Address:** edit the `.visit__addr` block and the Google Maps `iframe`/link.

## Preview locally
Just open `index.html` in a browser. Or run a tiny local server:

```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Deploy free on GitHub Pages

1. Create a new repository on GitHub (e.g. `ss-bites`).
2. Push these files to the repo:
   ```bash
   git init
   git add .
   git commit -m "SS Bites website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ss-bites.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**.
4. Set **Source** to `Deploy from a branch`, **Branch** = `main`, folder = `/ (root)`, then **Save**.
5. Wait ~1 minute. Your site goes live at:
   `https://<your-username>.github.io/ss-bites/`

### Alternatives (also free)
- **Netlify:** drag-and-drop this folder at https://app.netlify.com/drop
- **Cloudflare Pages / Vercel:** connect the GitHub repo and deploy with default settings.
