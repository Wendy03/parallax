$(document).ready(() => {
  $(window).scroll(function () {
    const scrollPos = $(this).scrollTop();
    const windowHeight = $(window).height();
    const gearBg = $('.gear-bg').offset().top;
    if (scrollPos + windowHeight / 2 >= gearBg) {
      $('.gear-bg').css(
        'background-position',
        `-${parseInt(scrollPos / 6)}px center`
      );
    }

    const strippedBg = $('.stripped-bg').offset().top;
    if (scrollPos + windowHeight / 2 >= strippedBg) {
      $('.stripped-bg').css(
        'background-position',
        `-${parseInt(scrollPos / 6)}px center`
      );
    }
  });
});
