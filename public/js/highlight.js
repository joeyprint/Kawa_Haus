$(document).ready(function () {

    $('.scroll-prev').css({
        'opacity' : 0
    });


    if($(window).width() <= 991) {
        $('.scroll-next').click(function() {
            $('.all-box').animate({
                'bottom' : 0
            },{
                'duration' : 2000
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
            },{
                'duration' : 2000
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
            },{
                'duration' : 2000
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
            }, {
                'duration' : 2000
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

        $('.menu-section').hover(function () {
            $(this).css({
                cursor : 'pointer'
            })
        });

        $('.menu-section').click(function() {
            $('.menu-section .menu-block').removeClass('hideBox');
            var index = $(this).data('id');
            console.log(index);

            $('.scroll').css({
                display: 'none',
            });

            if ( index > 1 && index <= 3 ) {
                $('.all-box').animate({
                    left: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    right: 'auto'
                });
            } else if ( index > 3 && index < 6 ) {
                $('.all-box').animate({
                    left: -3  * (index - 3) + 'vw'
                },{ 
                    duration: 1000
                });
            } else if ( index >=6 && index <=8 ) {
                $('.all-box').animate({
                    right: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    left: 'auto'
                });
            }

            $('.menu-section').animate({
                width: '3vw'
            },{
                duration: 1000
            });

            $(this).animate({
                width: '88vw'
            },{
                duration: 1000
            });

            $('div').removeClass('menu-box');
            $('.menu-section').css({
                'background-color' : 'rgba(255, 255, 255, 0.5)'
            })

            $(this).css({
                'width' : '100%',
                'background-color' : 'transparent',
            });
            
            $(this).children().addClass('hideBox');
            $('.seemore-text').css({ visibility: 'hidden' });
            $('.subtopic-thaitext').css({ visibility: 'hidden' });
            $('.menu-block').css({
                'background-color' : 'transparent',
                'width': '100%',
                'height': '3vw',
                'transform' : 'rotate(90deg)',
                'top' : '0%',
                'bottom' : 'auto',
            });
            $('.subtopic-text').css({
                'width' : '100vh',
                'top' : '0',
                'bottom' : 'auto',
                'font-size' : '20px',
            });
        });
    }

});

