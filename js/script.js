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

  // const artistSlider = new Swiper('.artist-slider', {
  //   // autoplay: { delay: 1000 },
  //   loop: true,
  //   centeredSlides: true,
  //   // slidesPerView: '7',
  //   // spaceBetween: 20,

  //   slidesPerView: '7',
  //   // spaceBetween: 10, // 슬라이드 사이의 간격 조정
  //   // navigation: {
  //   //   nextEl: '.btn-next',
  //   //   prevEl: '.btn-prev',
  //   // },
  // });

  // // 슬라이드 클릭 이벤트 추가
  // $('.artist-slider .swiper-slide').on('click', function () {
  //   const index = $(this).index();
  //   //artistSlider.slideToLoop(index, 400); // 클릭한 슬라이드로 이동, 400ms 동안 이동
  //   artistSlider.slideTo(index, 400); // 클릭한 슬라이드로 이동, 400ms 동안 이동
  // });

  const artistSlider = new Swiper('.artist-slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 7,
    spaceBetween: 10,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

  // 슬라이드 클릭 이벤트 추가
  $('.artist-slider .swiper-slide').on('click', function () {
    const realIndex = $(this).data('swiper-slide-index');
    artistSlider.slideToLoop(realIndex, 400); // 클릭한 슬라이드로 이동, 400ms 동안 이동
  });
});
