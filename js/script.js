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
$(".show-characters").click(() => {
  $(".mission-grid-dropdown").slideToggle(0);
  $(".character-container main i").toggleClass("rotate-icon");
});