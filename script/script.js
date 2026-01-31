"use strict";

const headerEl = document.querySelector("header");
const navBtnEl = document.querySelector(".navbar__mobile-btn");
const navLinksEl = document.querySelectorAll(".navbar__link:link");
// console.log(navLinksEl);

navBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

navLinksEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("navbar__link"))
      headerEl.classList.toggle("nav-open");
  });
});
