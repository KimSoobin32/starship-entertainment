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
  //슬라이드 크기 변할 땐 centeredSlides false
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
      // slidesPerView 소수점으로 줄 수 있음! 6.5 -> 잘리게
      900: {
        slidesPerView: 5,
      },
    },
  });

  //대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $dim = $('.dim');
  const $menu = $('.menu-wrap');
  //메뉴 버튼을 클릭했을 때 메뉴창이 보이게
  $btnMenu.on('click', function () {
    $menu.toggleClass('active');
    $dim.fadeToggle();
    // 햄버거 버튼에 on클래스 토글
    $btnMenu.toggleClass('on');
  });

  const topBtn = $('.top-btn');

  // 스크롤 이벤트 리스너
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      topBtn.addClass('show');
    } else {
      topBtn.removeClass('show');
    }
  });

  // 버튼 클릭 이벤트 리스너
  topBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });
});
