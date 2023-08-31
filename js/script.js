const arrowLinks = document.querySelectorAll("#arrow_link");

arrowLinks.forEach((svg) => {
  const line_1 = svg.querySelector("#Line_1");
  const line_2 = svg.querySelector("#Line_2");

  svg.addEventListener("mouseover", () => {
    line_1.setAttribute("x2", "125");
    line_2.setAttribute("x2", "125");
    line_2.setAttribute("x1", "78.1611");
  });

  svg.addEventListener("mouseout", () => {
    line_1.setAttribute("x2", "113");
    line_2.setAttribute("x2", "113");
    line_2.setAttribute("x1", "66.1611");
  });
});

let menu = document.querySelector("#menu-top-icon");
let catalog_button = document.querySelector("#menu-bottom-icon");
let catalog = document.querySelector(".header__nav-items");
let header_menu = document.querySelector(".header_menu");
let menu_close = document.querySelector("#menu-top-close-icon");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  header_menu.classList.toggle("open");
};

catalog_button.onclick = () => {
  catalog.classList.toggle("open");
};

menu_close.onclick = () => {
  menu.classList.remove("bx-x");
  header_menu.classList.remove("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  header_menu.classList.remove("open");
  catalog.classList.remove("open");
};

var swiper_4 = new Swiper(".swiper_4", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

const swiper_2 = new Swiper(".swiper_2", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    993: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    577: {
      slidesPerView: 3,
    },
  },
});
