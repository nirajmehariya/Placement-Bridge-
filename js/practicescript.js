const navE1 = document.querySelector(".nav");
const hamburgerE1 = document.querySelector(".hamburger");
// const navItemsE1s = document.querySelectorAll('.nav__item');

hamburgerE1.addEventListener("click", () => {
  navE1.classList.toggle("nav--open");
  hamburgerE1.classList.toggle("hamburger--open");
});
