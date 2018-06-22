$(document).ready(function() {
    $(".nav-link").on('click', function(e) {

        var nav = $(this).data("nav");
        console.log(nav);

        // animate
        $('html, body').animate({
            scrollTop: $("#" + nav).offset().top-90
        }, 1500);

    });

    $(window).scroll(function() {
        
        if( $(window).scrollTop() >= 150 ) {
            $('#nav-sansiri').slideUp();
        } 
        else if ( $(window).scrollTop() < 150 ) {
            $('#nav-sansiri').slideDown();
            
        }
    });
});