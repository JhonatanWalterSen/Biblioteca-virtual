var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide:1,
    direction: getDirection(),
    breakpoints: {
      766:{
        centeredSlides: false,
            slidesPerView: 3,
          }
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';
// pinche horizontal
    return direction;
  }