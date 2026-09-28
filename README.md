# Shreyansh Padarha: personal website

My academic homepage: a short bio and research interests, selected publications (click a paper's
thumbnail for a popup with its figure, TL;DR and key takeaway), experience, and education, grants and
teaching. It is a single static page hosted on GitHub Pages.

## Stack

Plain HTML and CSS, plus one short script (`js/site.js`) that opens and closes the paper popups
(native `<dialog>`). No framework, no build step, no dependencies. Dark mode follows the visitor's
system setting. The English/Hindi name swap on hover (header and footer) is CSS only: see `.swap`.

## Structure

```
index.html                  the whole site, in sections: intro, #research, #experience, #about
css/style.css               all styling; colours are CSS variables at the top (dark mode swaps them)
js/site.js                  thumbnail click → open that paper's popup; click outside, × or Esc closes
assets/
  Shreyansh_Padarha_CV.pdf  CV linked from the header and the About section
  img/                      profile photo and favicons
  papers/                   per paper: NAME-thumb.webp (4:3, 480 × 360) and NAME.webp (full figure)
favicon.svg
.nojekyll                   tells GitHub Pages to serve files as-is (no Jekyll processing)
```

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Opening `index.html` directly in a browser also works.

## Common updates

| Task | How |
| --- | --- |
| Update the CV | Replace `assets/Shreyansh_Padarha_CV.pdf`, keeping the filename. |
| Add a paper | Copy an `<li class="pub">` block inside `<ol class="pubs">` (newest first). Wrap my name in `<span class="me">` and the venue in `<span class="venue">`. Add `NAME-thumb.webp` and `NAME.webp` to `assets/papers/`. Give the `<dialog>` a unique `id` and set the thumbnail button's `data-dialog` to match. TL;DR: two sentences at most. |
| Add a position, award or teaching role | Copy an `<li>` in the matching `<ol class="timeline">`. |
| Change the photo | Replace `assets/img/profile.jpg` (5:6 portrait, about 600 × 715). |
| Change colours or fonts | Edit the variables at the top of `css/style.css`. |

## Deployment

GitHub Pages serves the `main` branch from the repository root, so every push to `main` redeploys
the site within a minute or two.

The custom domain `shreyanshpadarha.com` (registered with GoDaddy) is not wired up yet. To connect it:
add a `CNAME` file containing `shreyanshpadarha.com`, set the domain under Settings → Pages, and in
GoDaddy DNS point `A @` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and
`185.199.111.153`, plus `CNAME www` to `shreyansh-2003.github.io`.
