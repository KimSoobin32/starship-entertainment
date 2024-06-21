$(function () {
  const albumSlider = new Swiper('.album-slider', {
    // autoplay: { delay: 1000 },
    loop: true,
    centeredSlides: true,
    slidesPerView: '3',
    spaceBetween: 20, // 슬라이드 사이 간격
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

  const artistSlider = new Swiper('.artist-slider', {
    // autoplay: { delay: 5000 },
    loop: true,
    centeredSlides: true,
    slidesPerView: '5',
    // spaceBetween: 10,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
