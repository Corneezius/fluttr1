$(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#mainNav').fadeOut(500);
                $('footer').fadeOut(500);
            } else {
                $('#mainNav').fadeIn(500);
                $('footer').fadeIn(500);
            }
        });
    });
