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
  normalScrollElements: ".form__wrapper, .header__burger-body",
  fixedElements: "#header, .scroll-icon",
  // anchors: ["firstPage", "secondPage", "thirdPafe", "page4"],

  onLeave: (origin, destination, direction, trigger) => {
    const Nextnodes = destination.item.querySelectorAll("[data-aos]");
    const previousNodes = origin.item.querySelectorAll("[data-aos]");
    const video = destination.item.querySelector("video");
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
  if (subMenuBody.classList.contains("open")) {
    subMenuBody.style.height = subMenuBody.scrollHeight + "px";
  } else {
    subMenuBody.style.height = null;
  }
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

const form = document.getElementById("form");
const nameInput = form.name;
const job = form.job;
const email = form.email;
const phone = form.phone;
const company = form.company;
const locationInput = form.location;
const comment = form.comment;
const agreement = form.agreement;
const messageWrapper = form.querySelector(".form__message");
const agreementLabel = form.querySelector("label[for=agreement]");

form.addEventListener("submit", submitForm);

nameInput.addEventListener("input", isLengthValid);
email.addEventListener("input", isEmailValid);
phone.addEventListener("input", isPhoneValid);
job.addEventListener("input", isLengthValid);
company.addEventListener("input", isLengthValid);
locationInput.addEventListener("input", isLengthValid);
agreement.addEventListener("change", isCheckboxChecked);

var formData = new FormData();

function submitForm(e) {
  e.preventDefault();
  if (!isValid()) return;
  formData.append("name", nameInput.value);
  formData.append("job", job.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  formData.append("company", company.value);
  formData.append("locationInput", locationInput.value);
  formData.append("comment", comment.value);
  formData.append(
    "agreement",
    `agreement ${agreement.checked ? "" : "was NOT "}accepted`
  );

  console.log("form valid", formData);
}

function isValid() {
  let _errors = 0;

  if (!isLengthValid.call(nameInput)) {
    _errors += 1;
  }
  if (!isLengthValid.call(job)) {
    _errors += 1;
  }
  if (!isEmailValid.call(email)) {
    _errors += 1;
  }
  if (!isPhoneValid.call(phone)) {
    _errors += 1;
  }
  if (!isLengthValid.call(company)) {
    _errors += 1;
  }
  if (!isLengthValid.call(locationInput)) {
    _errors += 1;
  }
  if (!isCheckboxChecked.call(agreement)) {
    _errors += 1;
  }

  if (_errors === 0) {
    return true;
  } else {
    return false;
  }
}

function isCheckboxChecked() {
  const checked = this.checked;
  if (!checked) {
    this.classList.toggle("error", true);
    agreementLabel.classList.toggle("error", true);
    return false;
  } else {
    this.classList.toggle("error", false);
    agreementLabel.classList.toggle("error", false);
    return true;
  }
}

function isLengthValid() {
  const value = this.value;
  if (!value) {
    this.classList.toggle("error", true);
    return false;
  } else {
    this.classList.toggle("error", false);
    return true;
  }
}

function isPhoneValid() {
  const value = this.value;
  if (!/^[0-9\+)(\-\/]+$/.test(value)) {
    this.classList.toggle("error", true);
    return false;
  } else {
    this.classList.toggle("error", false);
    return true;
  }
}

function isEmailValid() {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const value = this.value;
  messageWrapper.innerHTML = "";
  if (!regExp.test(value)) {
    this.classList.toggle("error", true);
    messageWrapper.innerHTML = `Please provide a valid email. Example of a valid email: test@gmail.com`;
    showMessage(true);
    return false;
  } else {
    showMessage(false);
    this.classList.toggle("error", false);
    return true;
  }
}

function showMessage(show) {
  if (show) {
    messageWrapper.style.height = messageWrapper.scrollHeight + "px";
  } else {
    messageWrapper.style.height = "0px";
  }
}

agreement.addEventListener("focus", (e) => {
  document.addEventListener("keypress", onKeyPress);
});
agreement.addEventListener("blur", (e) => {
  document.removeEventListener("keypress", onKeyPress);
});

function onKeyPress(e) {
  e.preventDefault();
  if (e.key === "Enter") {
    agreement.checked = !agreement.checked;
    isCheckboxChecked.apply(agreement);
  }
}

//cookie
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function createCookieNode() {
  const wrapper = document.createElement("div");
  const body = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  button.classList.add("btn", "h5");
  p.classList.add("h5");
  body.classList.add("cookies__body");
  wrapper.classList.add("cookies");

  p.textContent = `By using this website, you agree to our use of cookies. We use cookies
  to provide you with a great experience and to help our website run
  effectively.`;
  button.textContent = "ACCEPT";

  button.addEventListener("click", onAcceptCookie);

  body.appendChild(p);
  body.appendChild(button);
  wrapper.appendChild(body);

  return wrapper;
  {
    /* <div class="cookies">
<div class="cookies__body">
  <p class="h5">
    By using this website, you agree to our use of cookies. We use cookies
    to provide you with a great experience and to help our website run
    effectively.
  </p>
  <button class="btn h5">ACCEPT</button>
</div>
</div>  */
  }
}

function onAcceptCookie() {
  const cookieeNode = document.querySelector(".cookies");
  const guid = generateGuid();
  document.cookie = `_guid=${guid}`;
  cookieeNode.classList.remove("show");
  setTimeout(() => {
    cookieeNode.remove();
  }, 500);
}

function generateGuid() {
  function generateGuidPart() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    generateGuidPart() +
    generateGuidPart() +
    "-" +
    generateGuidPart() +
    "-" +
    generateGuidPart() +
    "-" +
    generateGuidPart() +
    "-" +
    generateGuidPart() +
    generateGuidPart() +
    generateGuidPart()
  );
}

function checkForCookie() {
  if (!getCookie("_guid")) {
    document.body.appendChild(createCookieNode());
    setTimeout(() => {
      document.querySelector(".cookies").classList.add("show");
    }, 1);
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    checkForCookie();
  }, 3000);
});
