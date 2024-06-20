$(function () {
  const artistSlider = new Swiper('.album-slider', {
    // autoplay: { delay: 1000 },
    loop: true,
    centeredSlides: true,
    slidesPerView: '3',

    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
