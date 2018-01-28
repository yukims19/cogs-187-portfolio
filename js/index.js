$(document).ready(function(){
    $('.first_screen').hover(function(){
        //                 $('#great_r').css('display','block');
        $('#great_r, #great_l,#great_t,#great_b').fadeTo("slow", 1);

    });
    $(".great p").click(function() {
        $(".intro").fadeTo("slow",1);
        $('#great_r, #great_l,#great_t,#great_b').css("height","300px");
    });
    $(".home").click(function() {
        $(".contact").css({"text-decoration":"none"});
        $(".about").css({"text-decoration":"none"});
        $(".projects").css({"text-decoration":"none"});
        $(".home").css({"text-decoration":"underline"});
        $('html,body').animate({
            scrollTop: $(".language").offset().top},
                               'slow');
    });
    $(".about").click(function() {
        $(".contact").css({"text-decoration":"none"});
        $(".home").css({"text-decoration":"none"});
        $(".projects").css({"text-decoration":"none"});
        $(".about").css({"text-decoration":"underline"});
        $('html,body').animate({
            scrollTop: $(".aboutme").offset().top},
                               'slow');
    });
    $(".projects").click(function() {
        $(".contact").css({"text-decoration":"none"});
        $(".about").css({"text-decoration":"none"});
        $(".home").css({"text-decoration":"none"});
        $(this).css({"text-decoration":"underline"});
       // $(".projects").css({"color":"black","background-color":"white"});
        $('html,body').animate({
            scrollTop: $(".screen2").offset().top},
                               'slow');
    });
    $(".contact").click(function() {
        $(".home").css({"text-decoration":"none"});
        $(".about").css({"text-decoration":"none"});
        $(".projects").css({"text-decoration":"none"});
        $(".contact").css({"text-decoration":"underline"});
        $('html,body').animate({
            scrollTop: $(".screen3").offset().top},
                               'slow');
    });

    //js for contact page

    $('#wechat').click(
        function(){
            if($('.wechat').css('display')==='none'){
                $('.wechat').css('display','block');
                $('.Line').css('display','none')
            }else{
                $('.wechat').css('display','none')
            }
        }
    );

    $('#line').click(
        function(){
            if($('.line').css('display')==='none'){
                $('.line').css('display','block');
                $('.wechat').css('display','none')
            }else{
                $('.line').css('display','none')
            }
        }
    );

});
