var main = function () {
  $(document).keydown(function(e){
    var keyCode = e.keyCode || e.which;

    if (keyCode == 38) {
       $('img').animate({
         bottom: "+=100px"
       }, 1);
    } else if (keyCode == 40) {
       $('img').animate({
         bottom: "-=100px"
       }, 1);
    } else if (keyCode == 37) {
       $('img').animate({
         left: "-=10px"
       }, 1);
    } else if (keyCode == 39) {
       $('img').animate({
         left: "+=10px"
       }, 1);
    };
  });
};


$(document).ready(main);
