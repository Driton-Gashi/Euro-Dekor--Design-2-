const images = document.querySelectorAll(".foto");
const produkti = document.querySelectorAll(".foto_wrapper .text h3 a");
const navigation = document.querySelectorAll(".navigation ul li");

const changeClass = (element) => {
  navigation.forEach((x) => {
    x.classList.remove("aktive");
  });
  element.classList.add("aktive");
};

const closeFullImg = () => {
  let full = document.querySelector(".full_image");
  full.classList.remove("aktive");
};
const paradhoma = () => {
  let i = 1;
  images.forEach((element) => {
    element.src = `./portofolio/Paradhomat/${i++}.jpg`;

    element.addEventListener("click", (e) => {
      let url = e.target.src;
      let full = document.querySelector(".full_image");
      let fullImg = document.querySelector(".full_image .image");
      full.classList.add("aktive");
      fullImg.style.background = url;
    });
  });
  produkti.forEach((produkti) => {
    produkti.textContent = "Para Dhoma";
  });
  changeClass(navigation[2]);
};

const tvkomoda = () => {
  let i = 1;
  images.forEach((element) => {
    element.src = `./portofolio/TVkomoda/${i++}.jpg`;
    element.addEventListener("click", (e) => {
      let url = e.target.style.background;
      let full = document.querySelector(".full_image");
      let fullImg = document.querySelector(".full_image .image");
      full.classList.add("aktive");
      fullImg.style.background = url;
    });
  });
  produkti.forEach((produkti) => {
    produkti.textContent = "TV Komoda";
  });
  changeClass(navigation[3]);
};

const dhomaGjumi = () => {
  let i = 1;

  images.forEach((element) => {
    element.src = `./portofolio/Dhomat/${i++}.jpg`;
    element.addEventListener("click", (e) => {
      let url = e.target.style.background;
      let full = document.querySelector(".full_image");
      let fullImg = document.querySelector(".full_image .image");
      full.classList.add("aktive");
      fullImg.style.background = url;
    });
  });
  produkti.forEach((produkti) => {
    produkti.textContent = "Dhoma Gjumi";
  });
  changeClass(navigation[1]);
};

const kuzhina = () => {
  let i = 1;
  images.forEach((element) => {
    element.src = `./portofolio/Kuzhinat/${i++}.jpg`;
    element.addEventListener("click", (e) => {
      let url = e.target.src;
      let full = document.querySelector(".full_image");
      let fullImg = document.querySelector(".full_image .image");
      full.classList.add("aktive");
      fullImg.src = url;
    });
  });
  produkti.forEach((produkti) => {
    produkti.textContent = "Kuzhina";
  });
  changeClass(navigation[0]);
};
kuzhina();
