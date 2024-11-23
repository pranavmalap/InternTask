document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    const menu = document.querySelector("#navbarNav");
    menu.classList.toggle("show");
  });
});
