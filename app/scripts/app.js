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
         }, 200);
      } else if (counterH === 20 || counterH === 25 || counterH === 29 || counterH === 43 || counterH === 47 || counterH === 53) {
        if ($('#mario').hasClass('mirror')) {
          if (counterH === 53) {
            $('#mario').animate({
               bottom: "+=195px"
             }, 100);

            $('#mario').animate({
               left: "-=20px"
             }, 50);

            $('#mario').animate({
               bottom: "-=107px"
             }, 200);
          } else {
            $('#mario').animate({
               bottom: "+=195px"
             }, 100);

            $('#mario').animate({
               left: "-=20px"
             }, 50);

            $('#mario').animate({
               bottom: "-=18px"
             }, 200);
          };

          counterH --;
        } else {
          if (counterH === 47) {
            $('#mario').removeClass('mirror');

            $('#mario').animate({
               bottom: "+=195px"
             }, 100);

            $('#mario').animate({
               left: "+=20px"
             }, 50);

            $('#mario').animate({
               bottom: "-=107px"
             }, 200);
          } else {
            $('#mario').removeClass('mirror');

            $('#mario').animate({
               bottom: "+=195px"
             }, 100);

            $('#mario').animate({
               left: "+=20px"
             }, 50);

            $('#mario').animate({
               bottom: "-=18px"
             }, 200);
          };

          counterH ++;
        };

          counterV ++;
      } else {
        if ($('#mario').hasClass('mirror')) {
          $('#mario').animate({
             bottom: "+=195px"
           }, 100);

          $('#mario').animate({
             left: "-=20px"
           }, 50);

          $('#mario').animate({
             bottom: "-=195px"
           }, 200);

          counterH --;
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
      };
    } else if (keyCode == 37) {
      $('#mario').addClass('mirror');

      if (counterH > 0 && ((counterH <= 47 && counterV === 0) || (counterH >= 54 && counterV === 0) || counterV === 1)) {
        $('#mario').animate({
           left: "-=20px"
         }, 50);

        counterH --;
      };
    } else if (keyCode == 39) {
      $('#mario').removeClass('mirror');

      if (counterH < 68 && ((counterH <= 46 && counterV === 0) || (counterH >= 53 && counterV === 0) || counterV === 1) ) {
        $('#mario').animate({
           left: "+=20px"
         }, 50);

        counterH ++;
      };
    };

    if (((counterH >= 0) && (counterH <= 20)) || ((counterH >= 25) && (counterH <= 29)) || ((counterH >= 43) && (counterH <= 46)) || ((counterH >= 54) && (counterH <= 68))) {
      if (counterV === 1) {
        $('#mario').animate({
           bottom: "-=177px"
         }, 200);

        counterV--;
      };
    } else if (counterH === 47 || counterH === 53) {
      if (counterV === 1) {
        $('#mario').animate({
           bottom: "-=88px"
         }, 200);

        counterV--;
      };
    };
  });
};

$(document).ready(main);
