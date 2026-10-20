# Pixie Dust Couture — independent website

A standalone static multi-page website. This is **not** your Alterations & Creations React site. Keep it in a separate GitHub repository.

## 1. Preview in VS Code

1. Extract this ZIP.
2. Open VS Code → **File → Open Folder** → `Pixie_Dust_Couture_GitHub_Ready`.
3. Install the VS Code extension **Live Server** (by Ritwick Dey).
4. Right-click `index.html` → **Open with Live Server**.
5. Use the menu to navigate the collection, wholesale, about, contact and FAQ pages.

No `npm install` or build step is needed.

## 2. Add your own photos

Drop these images in `images/` (WebP recommended):

| Filename | Where it appears |
| --- | --- |
| `hero.webp` | Home page hero |
| `daydream.webp` | Daydream collection card and detail page |
| `moonbeam.webp` | Moonbeam collection card and detail page |
| `meadow.webp` | Meadow collection card and detail page |
| `stardust.webp` | Stardust collection card and detail page |

The site will **automatically show your photos** if files with these names exist. Until then, the dress illustrations remain visible.

To use JPGs instead, edit the `.webp` references in the HTML to `.jpg`. Aim for portrait images around 1200×1600 px, ideally under ~350 KB each. Use only photos you own or are licensed to use. Dress names are temporary concept names; edit them to match your actual line.

## 3. Upload to GitHub

1. Create a **new** repository named `pixie-dust-couture-website`.
2. Choose **Add file → Upload files** and upload **the contents** of this folder (not the ZIP itself).
3. Commit the changes.
4. To update later, edit files in VS Code, then use Source Control → Commit → Sync Changes (or `git add .`, `git commit -m "Update site"`, `git push`).

### Preview online with GitHub Pages

Repository → **Settings → Pages** → Deploy from a branch → `main` → `/ (root)` → Save. Pages will publish to a GitHub Pages URL. It may take a few minutes.

Alternatively deploy this static repository on Cloudflare Pages: connect the GitHub repository, choose **no framework**, no build command, and output directory `/` (repository root). Your host's UI may use different wording.

## 4. IMPORTANT: Before launching to the public

- This preview has `noindex,nofollow` in HTML to prevent accidental search indexing.
- Replace concept dress illustrations/text with your **real** dress photographs and accurate details.
- Decide on a real domain, then add canonical tags and production sitemap/robots.txt.
- Remove `noindex,nofollow` from every HTML file **only when ready to publish**.
- Connect the contact form to a real backend (currently demo only).
- Add privacy policy, terms, return/shipping details and real contact information as appropriate.
- Confirm wholesale pricing, MOQ, production timelines and buyer process.
- Validate structured data for real products only when product data is available.

SEO: separate, crawlable URLs, descriptive titles, descriptions, headings and internal links are already present, but ranking is never guaranteed. This is a design-ready starter, not a production commerce site.
