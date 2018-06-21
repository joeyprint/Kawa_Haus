var plan = $('#plan .owl-carousel');

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

plan.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navClass: ['.owl-previous', 'owl-forward'],
    autoWidth: false,
    URLhashListener:true,
    startPosition: 0,
    responsive: {
        0 :{
            items: 1
        }
    }
});

$('.owl-forward').click(function() {
    plan.trigger('next.owl.carousel');
})

$('.owl-previous').click(function() {
    plan.trigger('prev.owl.carousel', [300]);
})