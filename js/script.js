// $(window).load(function () {

// });
// Sticky Header Effect

const headerHeight = document.querySelector("header").scrollHeight;
const header = document.querySelector("header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > headerHeight) {
    header.classList.add("aktive");
  } else if (document.documentElement.scrollTop < 50) {
    header.classList.remove("aktive");
  }
};

// HERO Effect - Paragraph show and hide
const option = document.querySelectorAll(".first_page_option");
const option_paragraph = document.querySelectorAll(".first_page_option p");

option.forEach((element) => {
  element.addEventListener("mouseover", function () {
    this.childNodes[1].childNodes[5].classList.remove("hide");
  });
  element.addEventListener("mouseout", function () {
    this.childNodes[1].childNodes[5].classList.add("hide");
  });
});

const nav = document.querySelector(" header .header_down nav");
const burger = document.querySelector(".burger");
const toggleMenu = () => {
  nav.classList.toggle("aktive");
  burger.classList.toggle("bi-list");
  burger.classList.toggle("bi-x-lg");
};

// Footer year always updated to current year
document.querySelector(".year").textContent = new Date().getFullYear();

//Homepage option links
option.forEach((e) => {
  e.addEventListener("click", () => {
    window.location = "./produktet.html";
  });
});
