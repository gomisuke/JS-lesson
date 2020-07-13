/*
$(".theTarget").skippr({
    transition : 'fade',
    speed : 1000,
    easing : 'ease0utQuart',
    navType : 'block',
    childrenElementType : 'div',
    arrows : true,
    autoPlay : false,
    autoPlayDuration : 5000,
    keyboard0nAlways : true,
    hidePrevious : false
});
*/

$(function(){
    $('#back a').on('click', function(event){
        $('body, html').animate({
            scrollTop:0
        },800);
        event.preventDefault();
    });
});

