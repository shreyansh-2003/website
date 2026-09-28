// Clicking a paper's thumbnail shows or hides its TL;DR panel.
document.querySelectorAll(".pub-thumb").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Show summary" : "Hide summary");
    panel.hidden = open;
  });
});
