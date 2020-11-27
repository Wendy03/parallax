"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    var windowHeight = $(window).height();
    var gearBg = $('.gear-bg').offset().top;

    if (scrollPos + windowHeight / 2 >= gearBg) {
      $('.gear-bg').css('background-position', "-".concat(parseInt(scrollPos / 6), "px center"));
    }

    var strippedBg = $('.stripped-bg').offset().top;

    if (scrollPos + windowHeight / 2 >= strippedBg) {
      $('.stripped-bg').css('background-position', "-".concat(parseInt(scrollPos / 6), "px center"));
    }
  });
});
//# sourceMappingURL=all.js.map
