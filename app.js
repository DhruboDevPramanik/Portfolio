var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});
