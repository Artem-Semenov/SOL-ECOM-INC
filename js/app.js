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
    const video = destination.item.querySelector("video");
    console.log(destination.item);
    console.log(video);
    if (destination.index !== fullpage_api.test.Hn.length - 1) {
      if (video) video.play();
      previousNodes.forEach((node) => {
        node.classList.remove("aos-animate");
      });

      Nextnodes.forEach((node) => {
        node.classList.add("aos-animate");
      });
    }
  },
});

// menu burger

const header = document.getElementById("header");
const burgerBtn = document.querySelector(".header__burger-btn");
const burgerBody = document.querySelector(".header__burger-body");
const burgerContent = document.querySelector(".header__burger-body__content");
if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    const menuOpen = header.classList.contains("_active");

    if (!menuOpen) {
      burgerBtn.classList.add("_active");
      header.classList.add("_active");
      burgerBody.classList.add("_active");
      setTimeout(() => {
        burgerContent.classList.add("_active");
      }, 400);
    } else {
      burgerBtn.classList.remove("_active");
      header.classList.remove("_active");
      burgerContent.classList.remove("_active");
      setTimeout(() => {
        burgerBody.classList.remove("_active");
      }, 400);
    }
  });
}

//sub-menu

const subMenuBody = document.querySelector(".header__burger-body_sub-list");
const subMenuBtn = document.querySelector(".header__burger-body_arrow");

const togglesubMenuOpen = () => {
  subMenuBtn.classList.toggle("open");
  subMenuBody.classList.toggle("open");
};
const addTogglingOnMobile = () => {
  if (window.innerWidth < 1024) {
    subMenuBtn.addEventListener("click", togglesubMenuOpen);
  } else {
    if (subMenuBtn.classList.contains("open")) {
      togglesubMenuOpen();
    }
    subMenuBtn.removeEventListener("click", togglesubMenuOpen);
  }
};

window.addEventListener("resize", addTogglingOnMobile);
addTogglingOnMobile();

//form
try {
  const form = document.getElementById("form");
  const nameInput = form.name;
  const surname = form.surname;
  const job = form.job;
  const email = form.email;
  const phone = form.phone;
  const company = form.company;
  const location = form.location;
  const comment = form.comment;
  const agreement = form.agreement;

  /*   console.log(`form :`, form);
  console.log(`nameInput :`, nameInput);
  console.log(`surname :`, surname);
  console.log(`job :`, job);
  console.log(`email :`, email);
  console.log(`phone :`, phone);
  console.log(`company :`, company);
  console.log(`location :`, location);
  console.log(`comment :`, comment);
  console.log(`agreement :`, agreement); */

  form.addEventListener("submit", (e) => submitForm(e));

  const submitForm = (e) => {
    e.preventDefault();
    if (!isValid()) return;
  };

  const isValid = () => {
    const [
      nameValue,
      surnameValue,
      jobValue,
      emailValue,
      phoneValue,
      companyValue,
      locationValue,
      commentValue,
      agreementValue,
    ] = [
      nameInput.value,
      surname.value,
      job.value,
      email.value,
      phone.value,
      company.value,
      location.value,
      comment.value,
      agreement.checked,
    ];

    console.log(
      nameValue,
      surnameValue,
      jobValue,
      emailValue,
      phoneValue,
      companyValue,
      locationValue,
      commentValue,
      agreementValue
    );
  };
} catch (e) {
  console.log(e);
}
