var owl = $('#gallery .owl-carousel');

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

owl.on('initialized.owl.carousel', function(props) {
    var currentPage = props.item.index;
    console.log(currentPage);

    $('.owl-prev').css({
        "opacity": "0"
    });

    $('#page').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");

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

    $('#page').html((currentPage + 1) + "&nbsp;&nbsp;&nbsp;");
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})