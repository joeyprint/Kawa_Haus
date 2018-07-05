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
        if($(window).scrollTop()+ 500 >= $('#gallery').offset().top) {
            console.log('test');
            $.when(
                $('.flipper').each(function(event){
                    event.preventDefault;
                    if( !isLoop ){
                        animateCarousel()
                    }
                })
            ).done(function () {
                // Check Delay Time Function
                setTimeout(function(){
                    $('.img-active').addClass('active');
                    $('.flip-container').animate({opacity: '0'},150);
                },3000)
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
    });
});

var picture_img = [
    {
        picture: '1-full.jpg'
    },
    {
        picture: '2-full.jpg'
    },
    {
        picture: '3-full.jpg'
    },
    {
        picture: '4-full.jpg'
    },
    {
        picture: '5-full.jpg'
    },
    {
        picture: '6-full.jpg'
    },
    {
        picture: '7-full.jpg'
    },
    {
        picture: '8-full.jpg'
    },
    {
        picture: '9-full.jpg'
    },
    {
        picture: '10-full.jpg'
    },
    {
        picture: '11-full.jpg'
    },
    {
        picture: '12-full.jpg'
    },
    {
        picture: '13-full.jpg'
    },
    {
        picture: '14-full.jpg'
    },
    {
        picture: '15-full.jpg'
    },
    {
        picture: '16-full.jpg'
    },
    {
        picture: '17-full.jpg'
    },
    {
        picture: '18-full.jpg'
    },
    {
        picture: '19-full.jpg'
    },
    {
        picture: '20-full.jpg'
    },
    {
        picture: '21-full.jpg'
    },
    {
        picture: '22-full.jpg'
    },
    {
        picture: '23-full.jpg'
    },
    {
        picture: '24-full.jpg'
    },
    {
        picture: '25-full.jpg'
    },
    {
        picture: '26-full.jpg'
    },
    {
        picture: '27-full.jpg'
    },
    {
        picture: '28-full.jpg'
    },
    {
        picture: '29-full.jpg'
    },
    {
        picture: '30-full.jpg'
    },
    {
        picture: '31-full.jpg'
    },
    {
        picture: '32-full.jpg'
    }
]

$('.owl-item.active').on('click', function () {
    $('div').removeClass('modal-backdrop');
    // console.log('test');
    $('.model').css({
        'background-color' : '#000',
        'opacity' : '0.5',
        'z-index' : '1'
    });
});

function ImageZoom (imageNumber) {
    var index = imageNumber - 1;

    $("#picture").attr("src", 'imgs/' + picture_img[index].picture);
}