var owl = $('#gallery .owl-carousel');

owl.on('initialized.owl.carousel', function(props) {
    var currentPage = props.item.index;
    console.log(currentPage);

    $('.owl-prev').css({
        "opacity": "0"
    });

    $('#page-mobile').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");
    $('#page-desktop').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");

});

owl.owlCarousel({
    items: 1,
    loop: false,
    navClass: ['.owl-prev', 'owl-next']
});


owl.on('translate.owl.carousel', function(props) {
    var currentPage = props.item.index;
    console.log(currentPage);

    if(currentPage === 3) {
        $('.owl-next').css({
            "opacity": "0"
        });
    } else if (currentPage === 0) {
        $('.owl-prev').css({
            "opacity": "0"
        });
    } else {
        $('.owl-next').css({
            "opacity": "1"
        });
        $('.owl-prev').css({
            "opacity": "1"
        });
    }

    $('#page-mobile').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");
    $('#page-desktop').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});


// var for animate carousal
var isLoop = false;
var start = 1
var end = 7;


$(document).ready(function() {
    $(".owl-carousel").owlCarousel();

    $(window).scroll( function () {
        
        if($(window).width() > 991) {
            if($(window).scrollTop() + 500 >= $('#gallery').offset().top) {
                
                // var ar = [];
                $.when(
                    $('.flipper').each(function(event){
                        event.preventDefault;
                        if( !isLoop ){
                            animateCarousel()
                        }
                    })
                ).done(function () {
                    // $('.flip-container.active').animate({opacity : 0}, 100);
                    if($('.flip-container.active').length === $('.flip-container').length) {
                        $('.img-active').addClass('active');
                        $('.flip-container').animate({opacity: '0'},150);
                    }
                })
                    
                function animateCarousel() {
                    // console.log('debug:'+i);
                    isLoop = true;
                    $('[data-img="'+ start +'"]').addClass('active');
                    start++;
                    if( start <= end ){
                        setTimeout( animateCarousel, 300 );
                    }
                }
            }
        }
    })
});