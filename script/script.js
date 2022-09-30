"use strict";

const nav = document.querySelector(".nav");
const mobileMenu = document.getElementById("burger__check");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

mobileMenu.addEventListener("click", function (e) {
  if (e.target.checked) {
    nav.classList.add("menu-reveal");
  } else {
    hideMobileMenu();
  }
});

nav.addEventListener("click", scrolling.bind(".nav__links"));
footer.addEventListener("click", scrolling.bind(".footer__link"));

function hideMobileMenu() {
  nav.classList.remove("menu-reveal");
  mobileMenu.checked = false;
}

function scrolling(e) {
  const link = e.target.closest(this);
  if (!link) return;
  e.preventDefault();
  document
    .querySelector(`${link.getAttribute("href")}`)
    .scrollIntoView({ behavior: "smooth" });

  if (this == ".nav__links") {
    hideMobileMenu();
  }
}

const windowWidthResize = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.contentRect.width >= 782) {
      hideMobileMenu();
    }
  });
});

windowWidthResize.observe(header);
