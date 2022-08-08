const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  effect: "coverflow",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});
