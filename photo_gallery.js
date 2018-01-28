const main = function(){

                 $(".Overview").click(function() {
                     $('html,body').animate({
                         scrollTop: $(".first").offset().top},
                                            'slow');
                 });
                 $(".Functions").click(function() {
                     $('html,body').animate({
                         scrollTop: $(".second").offset().top},
                                            'slow');
                 });
                 $(".Process").click(function() {
                     $('html,body').animate({
                         scrollTop: $(".third").offset().top},
                                            'slow');
                 });
                 $(".Challenges").click(function() {
                     $('html,body').animate({
                         scrollTop: $(".forth").offset().top},
                                            'slow');
                 });

    $("#tutorial").hover(function(){

    })
};
$(document).ready(main);
