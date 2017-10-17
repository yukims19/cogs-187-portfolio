const main = function(){
    $(".projects").click(function() {
        $('html,body').animate({
            scrollTop: $(".screen2").offset().top},
                               'slow');
    });
};


$(document).ready(main);
