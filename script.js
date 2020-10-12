$(document).ready(function () {
  textfit();
  $(window).on('resize', textfit);

  function textfit() {
    $('.brand-name').css('font-size', 'medium');
    var w1 = $('.brand').width();
    var w2 = $('.brand-name').width();
    var wRatio = Math.round(w1 / w2 * 10) / 10;
    var h1 = $('.brand').height();
    var h2 = $('.brand-name').height();
    var hRatio = Math.round(h1 / h2 * 10) / 10;
    var constraint = Math.min(wRatio, hRatio);
    $('.brand-name').css('font-size', constraint + 'em');
  }
  if ($(".model-name").height() < "30") {
    $(".card").hover(
      function () {
        $(".brand").css({
          "bottom": "40px",
          "opacity": "1"
        });
        $(".contentBx").css({
          "height": "78px",
          "opacity": "1"
        });
        $(".price,.stroke").css({
          "align-items": "center",
          "bottom":"65px",
          "opacity": "1"
        });
      },
      function () {
        $(".brand").css({
          "bottom": "120px",
          "opacity": "0"
        });
        $(".price,.stroke").css({
          "align-items": "center",
          "bottom":"0px",
          "opacity": "0"
        });
      }
    );
  } else if ($(".model-name").height() > "30") {
    $(".card").hover(
      function () {
        $(".brand").css({
          "bottom": "56px",
          "opacity": "1"
        });
        $(".contentBx").css({
          "height": "93px",
          "opacity": "1"
        });
        $(".price,.stroke").css({
          "align-items": "center",
          "bottom":"70px",
          "opacity": "1"
        });
      },
      function () {
        $(".brand").css({
          "bottom": "120px",
          "opacity": "0"
        });
        $(".price,.stroke").css({
          "align-items": "center",
          "bottom":"0px",
          "opacity": "0"
        });
      }
    );
  }
});