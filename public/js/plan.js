var plan = $('#plan .owl-carousel');

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

plan.on('translate.owl.carousel', function(props) {
    var index = props.item.index - 1;
    console.log(index);

    // For Desktop
    $('.option-text').removeClass('active');
    if(index === 0 || index === 4) {
        $('[value="4"]').children().addClass('active');
    } else {
        $('[value=' + index + ']').children().addClass('active');
    }

    // For mobile select > option
    $('#plan-option-mobile > option').removeAttr('selected');
    $('[value=' + index + ']').attr('selected', 'selected');
});

$("#plan-option-mobile").on('change', function() {
    var value = $(this).val();
    // console.log(value);
    plan.trigger('to.owl.carousel', value-1);
});

$(".plan-option-desktop").click(function() {
    var value = $(this).attr('value');
    // console.log(value);
    plan.trigger('to.owl.carousel', value-1);
    $('.option-text').removeClass('active');
    $(this).children().addClass('active');
});

$('div.owl-forward').click(function() {
    plan.trigger('next.owl.carousel');
});

$('.owl-previous').click(function() {
    plan.trigger('prev.owl.carousel', [300]);
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});