// Light/dark toggle. A saved choice is applied by the small inline script in <head>
// before the page paints; this wires up the button in the top-right corner.
(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const systemDark = matchMedia("(prefers-color-scheme: dark)");
  const current = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");

  const sync = () => {
    button.setAttribute("aria-pressed", String(current() === "dark"));
    // keep the mobile browser bar in step with the page
    const bg = getComputedStyle(document.body).backgroundColor;
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", bg));
  };

  button.addEventListener("click", () => {
    root.dataset.theme = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {
      // private mode etc.: the toggle still works for this visit
    }
    sync();
  });
  systemDark.addEventListener("change", sync);
  sync();
})();

// Touch screens can't hover, so play a paper's illustration while it is on screen.
if (matchMedia("(hover: none)").matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.closest(".pub").classList.toggle("is-playing", e.isIntersecting)),
    { threshold: 0.6 }
  );
  document.querySelectorAll(".pub-art").forEach((art) => observer.observe(art));
}
