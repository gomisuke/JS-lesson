$(function(){
    $('#btn').on('click', function(){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "21770044f662502fb80455677b4223ae",
            dataType : 'jsonp',
        }).done(function (data){
            $('#place').text(data.name);
            $('#temp_max').text(data.main.temp_max);
            $('#temp_min').text(data.main.temp_min);
            $('#humidity').text(data.main.humidity);
            $('#speed').text(data.wind.speed);
            $('#weather').text(data.weather[0].main);
            $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            $('img').attr("alt",data.weather[0].main);

        }).fall(function (data) {
            alert('通信に失敗しました。');
        });
    });
});