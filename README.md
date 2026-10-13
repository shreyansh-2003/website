# Shreyansh Padarha: personal website

My academic homepage at [shreyanshpadarha.com](https://shreyanshpadarha.com): a short bio and research
interests, selected publications (each with a small animated illustration), experience, and education, grants
and teaching. It is a single static page hosted on GitHub Pages.

## Stack

Plain HTML and CSS, plus one small script (`js/site.js`). No framework, build step or dependencies.

- **Light/dark:** follows the visitor's system setting until they use the toggle (top right); the choice
  is saved in `localStorage` and applied by a tiny inline script in `<head>` before the page paints.
- **Paper illustrations:** hand-drawn inline SVGs (240 × 160) animated with CSS keyframes. They play on
  hover, or, on touch screens, while on screen (`js/site.js` adds `.is-playing`). Off for visitors who
  prefer reduced motion.
- **Caching:** GitHub Pages caches CSS/JS for 10 minutes, so `index.html` links them as
  `style.css?v=DATE`. **Bump the `?v=` value whenever you change CSS or JS.** Dark mode follows the
visitor's system setting. The English/Hindi name swap on hover (header and footer) is CSS only: see `.swap`.

## Structure

```
index.html                  the whole site, in sections: intro, #research, #experience, #about
css/style.css               all styling; colours are CSS variables at the top (two dark blocks, kept identical)
js/site.js                  light/dark toggle; plays illustrations on touch screens
assets/
  Shreyansh_Padarha_CV.pdf  CV linked from the header and the About section
  img/                      profile photo
CNAME                       custom domain for GitHub Pages (shreyanshpadarha.com)
robots.txt, sitemap.xml      let search engines find the site (update <lastmod> after big content changes)
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
| Add a paper | Copy an `<li class="pub">` block inside `<ol class="pubs">` (newest first). Wrap my name in `<span class="me">` and the venue in `<span class="venue">`. Draw an inline SVG for it inside `<figure class="pub-art">` (see the comment above the list in `index.html`), and add its hover animation under "Paper illustrations" in `css/style.css`. |
| Add a position, award or teaching role | Copy an `<li>` in the matching `<ol class="timeline">`. |
| Change the photo | Replace `assets/img/profile.jpg` (5:6 portrait, about 600 × 715). |
| Change colours or fonts | Edit the variables at the top of `css/style.css` (light palette in `:root`, dark palette in both dark blocks), then bump `?v=` in `index.html`. |

## Deployment

GitHub Pages serves the `main` branch from the repository root, so every push to `main` redeploys
the site within a minute or two.

The custom domain `shreyanshpadarha.com` (registered with GoDaddy) is set by the `CNAME` file and under
Settings → Pages. GoDaddy DNS needs `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and
`185.199.111.153`, plus `CNAME www` → `shreyansh-2003.github.io`. Once DNS resolves, tick "Enforce HTTPS"
under Settings → Pages.
