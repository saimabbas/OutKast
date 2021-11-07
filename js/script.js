$(".open-mob-header").click(() => {
  $(".mob-header").css({
    display: "block",
  });
});
$(".close-mob-header").click(() => {
  $(".mob-header").css({
    display: "none",
  });
});
var swiper = new Swiper(".character-swiperss", {
  slidesPerView: 1,
  spaceBetween: 15,
  freeMode: true,
});
var swiper = new Swiper(".showcase-swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: ".showcase-right",
    prevEl: ".showcase-left",
  },
  breakpoints: {
    850: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".team-swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: ".team-right",
    prevEl: ".team-left",
  },

  breakpoints: {
    850: {
      slidesPerView: 4,
    },
  },
});
$(".show-characters").click(() => {
  $(".mission-grid-dropdown").slideToggle(0);
  $(".character-container main i").toggleClass("rotate-icon");
});
