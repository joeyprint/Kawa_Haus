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

        $('.menu-section').click(function() {
            $('.menu-section .menu-block').removeClass('hideBox');
            $('.menu-section .detail-box').addClass('detail-hide');

            var index = $(this).data('id');

            if ( index > 1 && index <= 3 ) {
                $('.all-box').animate({
                    top: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    bottom: 'auto'
                });
            } else if ( index > 3 && index < 6 ) {
                $('.all-box').animate({
                    top: -50  * (index - 3) + 'px'
                },{ 
                    duration: 1000
                });
            } else if ( index >=6 && index <=8 ) {
                $('.all-box').animate({
                    bottom: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    top: 'auto'
                });
            }

            $.when(
                $('.menu-section').animate({
                    height: '50px'
                },{
                    duration: 1000
                }),
                
                $(this).animate({
                    height: '250px',
                },{
                    duration: 1000
                })
            ).done(function () {
                $(this)[1].find('.detail-box').removeClass('detail-hide');
                // console.log(this);
            });
            
            $('.menu-block').css({
                'background-color' : 'rgba(255, 255, 255, 0.8)',
                'height' : '250px',
                'top' : '0%',
                'bottom' : 'auto',
            });

            $('.subtopic-text').css({
                'width' : '100%',
                'top' : '0',
                'bottom' : 'auto',
                'font-size' : '20px',
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

        $('.menu-section').click(function() {
            $('div').removeClass('menu-box');
            $('.menu-section .menu-block').removeClass('hideBox');
            $('.menu-section .detail-box').addClass('detail-hide');
            var index = $(this).data('id');
            console.log(index);

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

            $(this).children().removeClass('detail-hide');

            $('.menu-block').css({
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

    $('.menu-section').hover(function () {
        $(this).css({
            cursor : 'pointer'
        })
    });

    $('.menu-section').click(function () {

        $('.menu-block').css({
            'background-color' : 'transparent',
            'width': '100%',
        });

        $('.scroll').css({
            display: 'none',
        });

        $('.menu-section').css({
            'background-color' : 'rgba(255, 255, 255, 0.5)'
        });

        $(this).css({
            'width' : '100%',
            'background-color' : 'transparent',
        });

        $(this).children().addClass('hideBox');
        $('.seemore-text').css({ visibility: 'hidden' });
        $('.subtopic-thaitext').css({ visibility: 'hidden' });
    });
});

