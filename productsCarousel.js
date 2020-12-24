/* Glider JS Config */

window.addEventListener("load", () => {
  new Glider(document.querySelector(".carouselItems"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: ".carouselIndicators",
    arrows: {
      prev: ".buttonPrev",
      next: ".buttonNext",
    },
  });
});
