document.addEventListener('DOMContentLoaded', () => {
new Swiper('.card-wrap', {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  slidesPerGroup: 2,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
//breakpoints
  breakpoints:{
    0: {
      slidesPerView:1
    },
    768:{
      slidesPerView:3
    },
    1024:{
      slidesPerView:3
    },

  }
});
});
