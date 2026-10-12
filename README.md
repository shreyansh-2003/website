# Shreyansh Padarha: personal website

My academic homepage at [shreyanshpadarha.com](https://shreyanshpadarha.com): a short bio and research
interests, selected publications (each with a figure from the paper), experience, and education, grants
and teaching. It is a single static page hosted on GitHub Pages.

## Stack

Plain HTML and CSS. No JavaScript, framework, build step or dependencies. Dark mode follows the
visitor's system setting. The English/Hindi name swap on hover (header and footer) is CSS only: see `.swap`.

## Structure

```
index.html                  the whole site, in sections: intro, #research, #experience, #about
css/style.css               all styling; colours are CSS variables at the top (dark mode swaps them)
assets/
  Shreyansh_Padarha_CV.pdf  CV linked from the header and the About section
  img/                      profile photo and favicons
  papers/                   one whole figure per paper, rendered from the PDF at 300 dpi (NAME.webp)
favicon.svg
CNAME                       custom domain for GitHub Pages (shreyanshpadarha.com)
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
| Add a paper | Copy an `<li class="pub">` block inside `<ol class="pubs">` (newest first). Wrap my name in `<span class="me">` and the venue in `<span class="venue">`. Add one whole figure from the paper as `assets/papers/NAME.webp` (≤ 1100 px wide, not cropped) and set its `width`/`height` attributes. |
| Add a position, award or teaching role | Copy an `<li>` in the matching `<ol class="timeline">`. |
| Change the photo | Replace `assets/img/profile.jpg` (5:6 portrait, about 600 × 715). |
| Change colours or fonts | Edit the variables at the top of `css/style.css`. |

## Deployment

GitHub Pages serves the `main` branch from the repository root, so every push to `main` redeploys
the site within a minute or two.

The custom domain `shreyanshpadarha.com` (registered with GoDaddy) is set by the `CNAME` file and under
Settings → Pages. GoDaddy DNS needs `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and
`185.199.111.153`, plus `CNAME www` → `shreyansh-2003.github.io`. Once DNS resolves, tick "Enforce HTTPS"
under Settings → Pages.
