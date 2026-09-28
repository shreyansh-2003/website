// Paper thumbnails open a popup (<dialog>) with the full figure, TL;DR and key takeaway.
// It closes on the × button, the Esc key (built in), or a click anywhere outside the box.
document.querySelectorAll(".pub-thumb").forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialog);
  button.addEventListener("click", () => dialog.showModal());
});

document.querySelectorAll(".pub-dialog").forEach((dialog) => {
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  // The dialog has no padding of its own, so a click whose target is the dialog
  // itself landed on the backdrop, i.e. outside the box.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
