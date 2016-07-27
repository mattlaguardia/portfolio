
$(".arrow-section-1").click(function(){
    $('html, body').animate({
        scrollTop: $(".section-2").offset().top
    }, 500);
});


$(".arrow-section-2").click(function(){
    $('html, body').animate({
        scrollTop: $(".section-3").offset().top
    }, 500);
});
