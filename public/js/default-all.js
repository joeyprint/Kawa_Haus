$(document).ready(function() {
    $(".nav-link").on('click', function(e) {

        var nav = $(this).data("nav");
        console.log(nav);

        // animate
        $('html, body').animate({
            scrollTop: $("#" + nav).offset().top-90
        }, 1500);

        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function() {

        // Check window scroll top
        // console.log('win scroll'+ $(window).scrollTop());
        if( $(window).width() >= 992 ) {
            if( $(window).scrollTop() >= 150 ) {
                $('#nav-sansiri').slideUp();
            } 
            else if ( $(window).scrollTop() < 150 ) {
                $('#nav-sansiri').slideDown();
            }
        }

        if($(window).scrollTop() >= $('#banner').offset().top) {
            $(".nav-link").removeClass('active');
            $("a[href='#banner']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#concept').offset().top){
            $(".nav-link").removeClass('active');
            $("a[href='#concept']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#regis').offset().top){
            // Check register scroll top
            // console.log('regis scroll'+$('#regis').offset().top);
            $(".nav-link").removeClass('active');
            $("a[href='#regis']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#highlight').offset().top){
            $(".nav-link").removeClass('active');
            $("a[href='#highlight']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#plan').offset().top){
            $(".nav-link").removeClass('active');
            $("a[href='#plan']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#gallery').offset().top){
            $(".nav-link").removeClass('active');
            $("a[href='#gallery']").addClass('active');
        }
        if($(window).scrollTop() + 100 >= $('#contact').offset().top){
            $(".nav-link").removeClass('active');
            $("a[href='#contact']").addClass('active');
        }
    });
});