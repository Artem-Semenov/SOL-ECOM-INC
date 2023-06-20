"use strict";
const jobsData = {
  1: {
    title: "ACCOUNT MANAGER (AFFILIATE)",
    desc: "Due to active development, we are looking for an Affiliate Manager who has ambitious goals, is an expert in his field and will be able to strengthen our team in new verticals.",
    willDo: [
      "To develop one of the areas of Crypto/Sweepstakes.",
      "Build vertical development strategies, promote verticals with the PR department and look for new platforms in the info space.",
      "Analyze competitors and trends in affiliate marketing.",
      "Analyze the effectiveness of advertising campaigns.",
      "Optimize traffic sources, track the increase in traffic volumes.",
      "Configure all necessary segments that partners may need.",
      "Process incoming applications and registrations from partners.",
      "Control traffic.",
      "Keep documentation and reports.",
    ],
    important: [
      "Experience in the position of Affiliate Manager from 2 years.",
      "Experience in Dating/Gambling/Crypto",
      "English — Upper-Intermediate+",
      "Understanding revenue share, CPA, CPL, CPI, CPM and CPC.",
      "Experience with popular tracking systems (Cake, Impact, Keitaro, RedTrack SwissSoft, Voluum, Binom, etc.) and the ability to configure postbacks.",
      "Experienced user of Google Docs & Google Sheets.",
      "Understanding of basic metrics and ability to qualitatively analyze traffic, experience in purchasing traffic.",
      "Excellent negotiation skills.",
      "Stress resistance, multitasking, result-oriented.",
      "The ability to approach the solution of tasks in a versatile and comprehensive manner.",
    ],
    offer: [
      "Remote work or hybrid work arrangement (office and remote).",
      "8-hour working day, Monday to Friday, with flexible start and end times.",
      "Competitive compensation, performance reviews, and bonuses.",
      "Generous paid vacation of 24 days and paid sick leave.",
      "Minimal bureaucracy and opportunities to influence product development.",
      "Robust referral program to reward professional connections.",
    ],
  },
  4: {
    title: "JUNIOR PROJECT MANAGER",
    desc: "At Sol Ecom Inc, we specialize in developing a revolutionary fintech product that is unparalleled in the market. By joining us, you will have the opportunity to engage in fair competition with these industry players.",
    willDo: [
      "Assisting the senior project manager in planning and executing marketing campaigns.",
      "Coordinating with various departments to ensure timely delivery of project milestones.",
      "Conducting market research and analyzing data to identify trends and opportunities.",
      "Developing project timelines and budgets, and monitoring progress against them.",
      "Communicating project updates and status reports to stakeholders.",
    ],
    important: [
      "Project management: The candidate should have a strong understanding of project management methodologies and be able to manage multiple projects simultaneously.",
      "Communication: The candidate should have excellent communication skills, both written and verbal, and be able to effectively communicate with team members, stakeholders, and clients.",
      "Analytical thinking: The candidate should be able to analyze data and make informed decisions based on that data.",
      "Problem-solving: The candidate should be able to identify problems and come up with creative solutions to solve them.",
      "Time management: The candidate should be able to manage their time effectively and prioritize tasks to meet deadlines.",
    ],
    offer: [
      "Remote work or hybrid work arrangement (office and remote).",
      "8-hour working day, Monday to Friday, with flexible start and end times.",
      "Competitive compensation, performance reviews, and bonuses.",
      "Generous paid vacation of 24 days and paid sick leave.",
      "Minimal bureaucracy and opportunities to influence product development.",
      "Robust referral program to reward professional connections.",
    ],
  },
  2: {
    title: "MANAGEMENT REPORTING SPECIALIST",
    desc: "Due to active company growth, we are currently seeking a Management Reporting Specialist. You will be responsible for independently managing the project from start to finish. We value initiative and its manifestation in order to help the project become better.",
    willDo: [
      "Organization and implementation of financial accounting, monitoring the company's financial activities;",
      "Development and implementation of financial strategies and policies of the company; Recording business transactions in management accounting;",
      "Control of mutual settlements, reconciliation statements, provision of reports on accounts payable and accounts receivable, etc.;",
      "Control of calculations and reflection of incentive programs;",
      "Control of accounting, analysis of calculations, optimization of expenses for each department of the company;",
      "Processing of bank statements;",
      "Preparation of reports on balances in accounts and cash and other reports related to cash flow;",
      "Preparation of financial and management reports based on the performance of each department of the company (Cash Flow, Profit and Loss, Balance Sheet, Dashboard, KPI, ad-hoc reporting for shareholders);",
    ],
    important: [
      "Education: finance, accounting, auditing, economics;",
      "Work experience as an accountant, economist (preferably in an IT company) for at least 5 years;",
      "Excellent knowledge of 1C, MS Excel, Google Sheets;",
      "Ability to perform calculations, analyses, and forecasts;",
      "Experience in accounting: processing primary data, accurately reflecting transactions, preparing reports, calculating and processing payroll.",
      "Ability to organize independent work and work in a team;",
      "Resilience to stress;",
      "Prioritization of tasks;",
      "Analytical and logical thinking;",
      "Ability to work with large volumes of data and analyze them;",
      "Ability to identify key points, trends, and tendencies in a data stream;",
      "Utilization of cause-and-effect relationships.",
    ],
    offer: [
      "Office-based work;",
      "8-hour workday;",
      "Paid vacation of 24 calendar days;",
      "Opportunity to influence the project's development;",
      "Advancement of your professional skills.",
    ],
  },
  3: {
    title: "SYSTEM ANALYST",
    desc: "As a System Analyst, you will play a crucial role in analyzing, designing, and implementing innovative technology solutions to meet our organization's needs.",
    willDo: [
      "Conduct in-depth analysis of existing systems, processes, and data to identify areas for improvement and optimization.",
      "Design and develop effective and efficient system solutions, utilizing industry best practices and emerging technologies.",
      "Perform system testing and quality assurance to ensure the successful implementation and integration of new solutions.",
      "Provide ongoing support and maintenance of existing systems, troubleshooting issues and implementing necessary enhancements.",
      "Stay up-to-date with technological advancements and industry trends to continuously improve system performance and reliability.",
    ],
    important: [
      "Proven experience as a System Analyst or similar role, demonstrating the ability to analyze complex systems and translate business requirements into technical solutions.",
      "Strong knowledge of system development methodologies, such as Agile or Waterfall.",
      "Proficiency in conducting system analysis, data modeling, and process mapping.",
      "Familiarity with relational databases and SQL for data extraction and analysis.",
      "Excellent problem-solving and critical thinking skills.",
      "Strong communication and collaboration abilities, with the capacity to effectively liaise with stakeholders at all levels of the organization.",
      "Attention to detail and a commitment to delivering high-quality work.",
    ],
    offer: [
      "A challenging and rewarding work environment with opportunities for professional growth and development.",
      "Competitive salary and comprehensive benefits package.",
      "Access to cutting-edge technologies and tools to enhance your skills and expertise.",
      "Collaborative and inclusive company culture that values teamwork and diversity.",
      "Work-life balance, with flexible working hours and the possibility of remote work.",
      "Supportive management and a strong commitment to employee well-being.",
      "Exciting projects and the chance to make a real impact in the organization and beyond.",
    ],
  },
};

new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  keyboardScrolling: true,
  scrollOverflow: false,
  css3: true,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  verticalCentered: true,
  normalScrollElements: ".form__wrapper, .header__burger-body, .careers-popup",
  fixedElements: "#header",
  // Navigation
  navigation: true,
  css3: true,
  anchors: [...document.querySelectorAll("[data-anchor]")].map(
    (el) => el.dataset.anchor
  ),
  navigationPosition: "right",
  navigationTooltips: [...document.querySelectorAll("[data-anchor]")].map(
    (el) => el.dataset.anchor.split("-").join(" ")
  ),
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: "bottom",
  //
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
const submitBtn = form.submitBtn;

submitBtn.addEventListener("click", submitForm);

nameInput.addEventListener("input", isLengthValid);
email.addEventListener("input", () => {
  isEmailValid.call(email, messageWrapper);
});
phone.addEventListener("input", isPhoneValid);
job.addEventListener("input", isLengthValid);
company.addEventListener("input", isLengthValid);
locationInput.addEventListener("input", isLengthValid);
agreement.addEventListener("change", isCheckboxChecked);

function submitForm(e) {
  e.preventDefault();
  if (!isValid()) return;
  e.target.classList.add("loading");
  const formData = new FormData(form);
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
  if (!isEmailValid.call(email, messageWrapper)) {
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

function isEmailValid(messageBox = null) {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const value = this.value;
  if (messageBox) messageBox.innerHTML = "";
  if (!regExp.test(value)) {
    this.classList.toggle("error", true);
    if (messageBox) {
      messageBox.innerHTML = `Please provide a valid email. Example of a valid email: test@gmail.com`;
      showMessage(true, messageBox);
    }
    return false;
  } else {
    if (messageBox) showMessage(false, messageBox);
    this.classList.toggle("error", false);
    return true;
  }
}

function showMessage(show, messageBox = null) {
  if (messageBox) {
    if (show) {
      messageBox.style.height = messageWrapper.scrollHeight + "px";
    } else {
      messageBox.style.height = "0px";
    }
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

//careers accordeon
const nodeToInsertArticleOnDesctop = document.querySelector(
  "#nodeToInsertArticleOnDesctop"
);
const rightSideContentDesctop = document.querySelector(
  ".careers__right-side__content .careers__li__job_desc"
);
const triggersInPopup = document.querySelectorAll(
  ".pop-up__careers__link_svg-wrapper"
);
let openedJob;

triggersInPopup.forEach((el) =>
  el.addEventListener("click", (e) => onAccordTriggerClick.call(el, e))
);

function onAccordTriggerClick(e) {
  const clickedSection = e.target.dataset.section;
  const accordBody = this.parentElement.nextElementSibling;

  if (window.innerWidth > 1023) {
    for (const el of triggersInPopup) {
      if (el.dataset.section === clickedSection) continue;
      el.classList.toggle("open", false);
      el.parentElement.parentElement.classList.toggle("open", false);
    }

    nodeToInsertArticleOnDesctop.innerHTML =
      "<ul>" +
      jobsData[openedJob][clickedSection]
        .map(
          (el) => `<li class="h5 body-l">
   ${el} </li>`
        )
        .join("") +
      "</ul>";
  }

  this.classList.toggle("open");

  if (this.classList.contains("open")) {
    if (rightSideContentDesctop) {
      rightSideContentDesctop.classList.toggle("open", true);
    }
    if (accordBody) {
      accordBody.style.marginTop = "10px";
      if (accordBody.classList.contains("careers__li__job_desc")) {
        this.parentElement.parentElement.classList.toggle("open", true);
      }
      accordBody.style.height = accordBody.scrollHeight + 10 + "px";
    }
  } else {
    if (rightSideContentDesctop) {
      rightSideContentDesctop.classList.toggle("open", false);
    }
    if (accordBody) {
      accordBody.style.marginTop = "0px";
      if (accordBody.classList.contains("careers__li__job_desc")) {
        this.parentElement.parentElement.classList.toggle("open", false);
      }
      accordBody.style.height = null;
    }
  }
}

//careers pop-up
const applyBtn = document.querySelector(".careers__pop-up__applyBtn");
const careersFormInPopupWrapper = document.querySelector(
  ".careers__apply-form"
);

const careersPopupTriggers = document.querySelectorAll(
  ".triggerOpenFullJobDecsriptin"
);
const careersJobPopup = document.getElementById("careers-popup");
const careersPopupCloseBtn = document.querySelector(".careers__close-btn");

careersPopupTriggers.forEach((el) => {
  el.addEventListener("click", onCareersPopupTriggersClick);
});

careersPopupCloseBtn.addEventListener("click", (e) => {
  careersJobPopup.classList.remove("open");
  careersFormInPopupWrapper.classList.remove("open");
});

function onCareersPopupTriggersClick(e) {
  const clickedJobId = +e.target.dataset.job;
  openedJob = clickedJobId;
  careersJobPopup.classList.toggle("open", true);

  const nodeToInsertTitle = careersJobPopup.querySelector("#nodeToInsertTitle");
  const nodeToInsertDesc = careersJobPopup.querySelector("#nodeToInsertDesc");

  const nodeToInsertArtickleMobile1 = careersJobPopup.querySelector(
    "#nodeToInsertArticle1"
  );
  const nodeToInsertArtickleMobile2 = careersJobPopup.querySelector(
    "#nodeToInsertArticle2"
  );
  const nodeToInsertArtickleMobile3 = careersJobPopup.querySelector(
    "#nodeToInsertArticle3"
  );

  nodeToInsertTitle.innerHTML = jobsData[clickedJobId].title;
  nodeToInsertDesc.innerHTML = jobsData[clickedJobId].desc;
  if (window.innerWidth > 1023) {
    if (!triggersInPopup[0].classList.contains("open"))
      triggersInPopup[0].click();
  } else {
    nodeToInsertArtickleMobile1.innerHTML =
      "<ul>" +
      jobsData[clickedJobId].willDo
        .map(
          (el) => `<li class="h5 body-l">
 ${el} </li>`
        )
        .join("") +
      "</ul>";
    nodeToInsertArtickleMobile2.innerHTML =
      "<ul>" +
      jobsData[clickedJobId].important
        .map(
          (el) => `<li class="h5 body-l">
 ${el} </li>`
        )
        .join("") +
      "</ul>";
    nodeToInsertArtickleMobile3.innerHTML =
      "<ul>" +
      jobsData[clickedJobId].offer
        .map(
          (el) => `<li class="h5 body-l">
 ${el} </li>`
        )
        .join("") +
      "</ul>";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("careers-popup")) {
    careersJobPopup.classList.remove("open");
    careersFormInPopupWrapper.classList.remove("open");
  }
});

//careers form in popup
const backBtn = document.querySelector(".careers__apply-form__back-btn");
const sendBtn = document.querySelector(".careers__pop-up__sendBtn");

const careersForm = document.getElementById("careers__apply__form");
const careersNameInput = careersForm.name;
const careersEmail = careersForm.email;
const careersPhone = careersForm.phone;
const careersLinkedin = careersForm.linkedin;
const careersAgreement = careersForm.agreement;

applyBtn.addEventListener("click", onApplyBtnClick);
backBtn.addEventListener("click", (e) => {
  careersFormInPopupWrapper.classList.toggle("open", false);
});
sendBtn.addEventListener("click", onSendFormClick);

function onApplyBtnClick() {
  careersFormInPopupWrapper.classList.toggle("open");
}

function onSendFormClick(e) {
  e.preventDefault();
  if (!validateCareersForm()) return;
  e.target.classList.add("loading");
  const formData = new FormData(careersForm);
  console.log("form valid", formData);
}

function validateCareersForm() {
  let _errors = 0;

  if (!isLengthValid.call(careersNameInput)) {
    _errors += 1;
  }
  if (!isEmailValid.call(careersEmail)) {
    _errors += 1;
  }
  if (!isPhoneValid.call(careersPhone)) {
    _errors += 1;
  }
  if (!isLengthValid.call(careersLinkedin)) {
    _errors += 1;
  }
  if (!isCheckboxChecked.call(careersAgreement)) {
    _errors += 1;
  }

  if (_errors === 0) {
    return true;
  } else {
    return false;
  }
}

//services accordeon

const accordButtons = document.querySelectorAll(".services__link_svg-wrapper");

accordButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (!clickedEl.parentElement.classList.contains("open")) {
      accordButtons.forEach((item) => {
        item.parentElement.classList.remove("open");
      });
    }
    clickedEl.parentElement.classList.toggle("open");
  });
});

/* window.addEventListener("load", (e) => {
  document.getElementById("animation-container").remove();
});
 */