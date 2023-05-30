"use strict";
new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  keyboardScrolling: true,
  // scrollBar: true
  scrollOverflow: false,
  css3: true,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  verticalCentered: true,

  onLeave: (origin, destination, direction, trigger) => {
    const Nextnodes = destination.item.querySelectorAll("[data-aos]");
    const previousNodes = origin.item.querySelectorAll("[data-aos]");
    previousNodes.forEach((node) => {
      node.classList.remove("aos-animate");
    });

    Nextnodes.forEach((node) => {
      node.classList.add("aos-animate");
    });
  },
});

// menu burger

const header = document.getElementById("header");
const burgerBtn = document.querySelector(".header__burger-btn");
const burgerBody = document.querySelector('.header__burger-body');
const burgerContent = document.querySelector('.header__burger-body__content');
if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
  const menuOpen = header.classList.contains('_active')

  if (!menuOpen) {
    burgerBtn.classList.add("_active");
    header.classList.add("_active");
    burgerBody.classList.add("_active");
    setTimeout(() => {
      burgerContent.classList.add("_active");
    }, 400)
  } else {
    burgerBtn.classList.remove("_active");
    header.classList.remove("_active");
    burgerContent.classList.remove("_active");
    setTimeout(() => {
      burgerBody.classList.remove("_active");
    }, 400)
  }

  });
}
