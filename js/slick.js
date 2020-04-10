var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    direction: getDirection(),
    320:{
      slidesPerView: 2,
      spaceBetween: 20
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