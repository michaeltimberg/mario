/* mario */

var main = function () {
    function moveGoomba () {
        $('.goomba').removeClass('mirror');

        $('.goomba').animate({
            left: "+=130px"
        }, 5000, function () {
            $('.goomba').addClass('mirror');
        });

        $('.goomba').animate({
            left: "-=130px"
        }, 5000, moveGoomba);
    }

    moveGoomba ();

    var counterH = 0;
    var counterV = 0;

    var leftArray = [0, 29, 40, 46];
    var rightArray = [25, 37, 46];
    var topArray = [12, 13, 17, 18, 19, 20, 21, 22];

    var jumpArray = [11, 14, 16, 23]

    $(document).keydown(function(e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode == 38) {
            if (jumpArray.indexOf(counterH) == 0 || jumpArray.indexOf(counterH) == 2) {
                $('#mario').removeClass('mirror');

                $('#mario').animate({
                    top: "-=119px"
                }, 90);

                $('#mario').animate({
                    left: "+=25px"
                }, 25);

                counterV++
                counterH++
            } else if (jumpArray.indexOf(counterH) == 1 || jumpArray.indexOf(counterH) == 3) {
                $('#mario').addClass('mirror');

                $('#mario').animate({
                    top: "-=119px"
                }, 90);

                $('#mario').animate({
                    left: "-=25px"
                }, 25);

                counterV++
                counterH--
            } else if (topArray.indexOf(counterH) == -1) {
                $('#mario').animate({
                    top: "-=130px"
                }, 100);

                $('#mario').animate({
                    top: "+=130px"
                }, 80);
            } else {
                $('#mario').animate({
                    top: "-=65px"
                }, 50);

                $('#mario').animate({
                    top: "+=65px"
                }, 30);
            }
        } else if (keyCode == 37) {
            $('#mario').addClass('mirror');

            if (leftArray.indexOf(counterH) == -1) {
                $('#mario').animate({
                    left: "-=25px"
                }, 50);

                counterH--
            }
        } else if (keyCode == 39) {
            $('#mario').removeClass('mirror');

            if (rightArray.indexOf(counterH) == -1) {
                $('#mario').animate({
                    left: "+=25px"
                }, 50);

                counterH++
            }
        }

        if (counterV == 1 && topArray.indexOf(counterH) == -1) {
            $('#mario').animate({
                top: "+=119px"
            }, 150);

            counterV--
        }
    });
};

$(document).ready(main);
