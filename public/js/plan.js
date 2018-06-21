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

$("#plan-option-mobile").on('change', function() {
    var value = $(this).val();
    console.log(value);
    plan.trigger('to.owl.carousel', value-1);
});

$(".plan-option-desktop").click(function() {
    var value = $(this).attr('value');
    console.log(value);
    plan.trigger('to.owl.carousel', value-1);
});

$('div.owl-forward').click(function() {
    plan.trigger('next.owl.carousel');
})

$('.owl-previous').click(function() {
    plan.trigger('prev.owl.carousel', [300]);
})