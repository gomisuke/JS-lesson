var hello = "Hello World";
alert(hello);

var max = 100;
var num = 1;
var count = 0;

while(num<max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて'+ max +'を超えるのに' + count + '回かかりました');

var i;
var num = 0;

for(i = 1; i < 11; i++){
    num = num + i;
}

alert('1から10まで足した結果は' + num + 'です');

alert(1+2);
alert(1*2);
alert(1/2);
alert(1-2);