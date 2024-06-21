$(function () {
  const albumSlider = new Swiper('.album-slider', {
    // autoplay: { delay: 1000 },
    loop: true,
    centeredSlides: true,
    slidesPerView: '1',
    // spaceBetween: 10, // 슬라이드 사이 간격
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    breakpoints: {
      //브라우저 창 크기가 768px 이상일 때(변화하는 부분만 언급)
      // 768: {
      //   slidesPerView: 2,
      // },
      //브라우저 창 크기가 1200px 이상일 때
      900: {
        slidesPerView: 3,
      },
    },
  });

  const artistSlider = new Swiper('.artist-slider', {
    autoplay: { delay: 3000 },
    loop: true,
    centeredSlides: true,
    // slidesPerView: '5',
    slidesPerView: '3',
    spaceBetween: 5,

    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    // //반응형 분기 설정: min-width() --> 최소 이상
    breakpoints: {
      //브라우저 창 크기가 768px 이상일 때(변화하는 부분만 언급)
      // 768: {
      //   slidesPerView: 2,
      // },
      //브라우저 창 크기가 1200px 이상일 때
      900: {
        slidesPerView: 5,
      },
    },
  });
});
