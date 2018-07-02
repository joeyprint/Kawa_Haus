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
            $('.close-icon').addClass('detail-hide');
            $(".menu-section").addClass("deActive");
            
            var index = $(this).data('id');
            
            $('.close-icon').attr('data-close', index);

            if ( index >= 1 && index <= 3 ) {
                $('.all-box').animate({
                    top: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    bottom: 'auto'
                });

                $('.scroll-prev').css({
                    'opacity' : 0
                });

                $('.scroll-next').css({
                    'opacity' : 1
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

                $('.scroll-prev').css({
                    'opacity' : 1
                });

                $('.scroll-next').css({
                    'opacity' : 0
                });
            }

            $.when(
                $(this).removeClass("deActive"),
                $(this).animate({height: '250px'},{
                    duration: 500
                }),
                $(".menu-section.deActive").animate({height:'50px'},{
                    duration: 500
                })
            ).done(function () {
                $(this)[1].find('.detail-box').removeClass('detail-hide');
                $('.close-icon').removeClass('detail-hide');
                $('.close-icon').css({
                    top : 50 * (index-1)
                });
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

        $('.close-icon').click(function () {
            $('.menu-box').animate({
                width : '50%',
                height : '100px'
            });
        })

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
            $('.close-icon').addClass('detail-hide');
            $(".menu-section").addClass("deActive");
            
            var index = $(this).data('id');

            $('.close-icon').attr('data-close', index);

            if ( index >= 1 && index <= 3 ) {
                $('.all-box').animate({
                    left: '0'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    right: 'auto'
                });

                $('.scroll-prev').css({
                    'opacity' : 0
                });

                $('.scroll-next').css({
                    'opacity' : 1
                });
            } else if ( index > 3 && index < 6 ) {
                $('.all-box').animate({
                    left: -3  * (index - 3) + 'vw'
                },{ 
                    duration: 1000
                });

                $('.all-box').css({
                    right: 'auto'
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

                $('.scroll-prev').css({
                    'opacity' : 1
                });

                $('.scroll-next').css({
                    'opacity' : 0
                });
            }

            $.when(

                $(this).removeClass("deActive"),
                $(this).animate({width:'88vw'},{
                    duration: 500
                }),
                $(".menu-section.deActive").animate({width:'3vw'},{
                    duration: 500
                })

            ).done(function () {

                $(this)[1].find('.detail-box').removeClass('detail-hide');
                $('.close-icon').removeClass('detail-hide');

                console.log($(this)[1].find('.detail-box'));
                $('.close-icon').css({
                    right: (20 - (index-1) * 2.65) + '%'
                });

            });

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

        $('.close-icon').click(function () {
            $('.menu-section').animate({
                width : '20vw',
                height : 'initial'
            });
        })
        
    }

    $('.menu-section').hover(function () {
        $(this).css({
            cursor : 'pointer'
        })
    });

    $('.menu-section').click(function () {

        var index = $(this).data('id');

        if(index === 1) {
            $('.box').css({
                'background-image': "url('/imgs/hl1.jpg')"
            });
        } else if (index === 2) {
            $('.box').css({
                'background-image': "url('/imgs/hl2.jpg')"
            });
        } else if (index === 3) {
            $('.box').css({
                'background-image': "url('/imgs/hl3.jpg')"
            });
        } else if (index === 4) {
            $('.box').css({
                'background-image': "url('/imgs/hl4.jpg')"
            });
        } else if (index === 5) {
            $('.box').css({
                'background-image': "url('/imgs/hl5.jpg')"
            });
        } else if (index === 6) {
            $('.box').css({
                'background-image': "url('/imgs/hl6.jpg')"
            });
        } else if (index === 7) {
            $('.box').css({
                'background-image': "url('/imgs/hl7.jpg')"
            });
        } else if (index === 8) {
            $('.box').css({
                'background-image': "url('/imgs/hl8.jpg')"
            });
        }

        $('.menu-block').css({
            'background-color' : 'transparent',
            'width': '100%',
        });

        $('.scroll').css({
            display: 'none',
        });

        $('.menu-section').css({
            'background-color' : 'rgba(255, 255, 255, 0.5)',
            'border-top' : 'none',
            'border-bottom' : 'none'
        });

        $(this).css({
            'width' : '100%',
            'background-color' : 'transparent',
        });

        $(this).children().addClass('hideBox');
        $('.seemore-text').css({ visibility: 'hidden' });
        $('.subtopic-thaitext').css({ visibility: 'hidden' });

    });

    $('.close-icon').click(function () {
        $('.menu-section').children().removeClass('hideBox');
        $('.menu-section').find('.menu-block').addClass('menu-box');
        $('.menu-section').find('.detail-box').addClass('detail-hide');
        $('.close-icon').addClass('detail-hide');
        $('.menu-section').attr('style', '');
        $('.menu-box').attr('style', '');
        $('.menu-box > p').attr('style', '');
        $('.scroll').css({
            display: 'block'
        });
        $('.box').css({
            'background-image': "url('/imgs/water_front.png')"
        });
    });
});

