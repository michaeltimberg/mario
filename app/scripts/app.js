/* mario */

var main = function () {
  function moveGoomba () {
    $('.goomba').removeClass('mirror');

    $('.goomba').animate({
      left: "+=190px"
    }, 5000, function() {
      $('.goomba').addClass('mirror');
    });

    $('.goomba').animate({
      left: "-=190px"
    }, 5000, moveGoomba);
  };

  moveGoomba ();

  var counterH = 0;
  var counterV = 0;

  $(document).keydown(function(e){
    var keyCode = e.keyCode || e.which;

    if (keyCode == 38) {
      if (((counterH >= 21) && (counterH <= 24)) || ((counterH >= 30) && (counterH <= 42))) {
        $('#mario').animate({
           bottom: "+=95px"
         }, 100);

        $('#mario').animate({
           bottom: "-=95px"
         }, 100);
      } else if (counterH === 20 || counterH === 29) {
        $('#mario').removeClass('mirror');

        $('#mario').animate({
           bottom: "+=195px"
         }, 100);

        $('#mario').animate({
           left: "+=20px"
         }, 50);

        $('#mario').animate({
           bottom: "-=18px"
         }, 100);

        counterH ++;
        counterV ++;
      } else {
        $('#mario').removeClass('mirror');

        $('#mario').animate({
           bottom: "+=195px"
         }, 100);

        $('#mario').animate({
           left: "+=20px"
         }, 50);

        $('#mario').animate({
           bottom: "-=195px"
         }, 100);

        counterH ++;
      };
    } else if (keyCode == 37) {
      $('#mario').addClass('mirror');

      if (counterH > 0 && ((counterH <= 46 && counterV === 0) || (counterH >= 55 && counterV === 0) || counterV === 1)) {
        $('#mario').animate({
           left: "-=20px"
         }, 50);

        counterH --;
      };
    } else if (keyCode == 39) {
      $('#mario').removeClass('mirror');

      if (counterH < 62 && ((counterH <= 45 && counterV === 0) || (counterH >= 55 && counterV === 0) || counterV === 1) ) {
        $('#mario').animate({
           left: "+=20px"
         }, 50);

        counterH ++;
      };
    };

    if (((counterH >= 0) && (counterH <= 20)) || ((counterH >= 25) && (counterH <= 29)) || ((counterH >= 43) && (counterH <= 62))) {
      if (counterV === 1) {
        $('#mario').animate({
           bottom: "-=177px"
         }, 200);

        counterV--;
      };
    };
  });
};

$(document).ready(main);
