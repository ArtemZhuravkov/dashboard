document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".dashboard__sidebar");
  const logo = document.querySelector(".dashboard__logo-img--mobile");
  const closeButton = document.querySelector(".dashboard__close-btn");
  const overlay = document.createElement("div");
  overlay.classList.add("dashboard__overlay");
  document.body.appendChild(overlay);

  // Open sidebar on logo click
  logo.addEventListener("click", () => {
    sidebar.classList.add("dashboard__sidebar--visible");
    overlay.classList.add("dashboard__overlay--visible");
  });

  // Close sidebar on close button or overlay click
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("dashboard__sidebar--visible");
    overlay.classList.remove("dashboard__overlay--visible");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("dashboard__sidebar--visible");
    overlay.classList.remove("dashboard__overlay--visible");
  });
});
