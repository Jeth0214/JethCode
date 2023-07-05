// swiper configurations
let swiper = new Swiper(".testimonials ", {
  slidesPerView: 1,
  spaceBetween: 35,
  slidesPerGroup: 1,
  grabCursor: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
