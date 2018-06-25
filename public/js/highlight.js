$(document).ready(function () {

    $('.scroll-prev').css({
        'opacity' : 0
    });


    if($(window).width() <= 991) {
        $('.scroll-next').click(function() {
            $('.all-box').animate({
                'bottom' : 0
            });

            $('.all-box').css({
                'top'  : 'auto'
            });

            $('.scroll-prev').css({
                'opacity' : 1
            });

            $(this).css({
                'opacity' : 0
            });
        });

        $('.scroll-prev').click(function() {
            $('.all-box').animate({
                'top' : 0
            });

            $('.all-box').css({
                'bottom'  : 'auto'
            });

            $('.scroll-next').css({
                'opacity' : 1
            });

            $(this).css({
                'opacity' : 0
            });
        });

    } else {
        $('.scroll-next').click(function() {
            $('.all-box').animate({
                'right' : 0
            });

            $('.all-box').css({
                'left'  : 'auto'
            });

            $('.scroll-prev').css({
                'opacity' : 1
            });

            $(this).css({
                'opacity' : 0
            });
        });

        $('.scroll-prev').click(function() {
            $('.all-box').animate({
                'left' : 0
            });

            $('.all-box').css({
                'right'  : 'auto'
            });

            $('.scroll-next').css({
                'opacity' : 1
            });

            $(this).css({
                'opacity' : 0
            });
        });
    }

});

