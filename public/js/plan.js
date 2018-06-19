var owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,    
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navClass: ['.owl-prev', 'owl-next'],
    autoWidth: false,
    URLhashListener:true,
    startPosition: 0,
    responsive: {
        0 :{
            items: 1
        }
    }
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})