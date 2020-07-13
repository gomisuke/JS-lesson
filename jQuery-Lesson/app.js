/*
$(function(){
    $('.box1').slideDown(2000,function(){
        $('.box1').css({
            'background-color': '#0000FF',
            'width':'200px',
            'height':'100px'
        }).slideUp(3000);
    });
});
*/
/*
$(function(){
    $('.box1').mouseover(function(){
        $('.box1').css({'background-color':'#0000FF'});
    });
    $('.box1').mouseout(function(){
        $('.box1').css({'background-color': '#FF0000'});
    });
});
*/
/*
$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});
*/

$(function(){
    $('button').on('click', function(){
        $('ul').children().css('color','red');
    });
});

