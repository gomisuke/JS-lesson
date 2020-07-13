var hello = "Hello World";
alert(hello);
/*
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

var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
    var addStr = "Hello" + strA;
    return addStr;
}

var promptStr = prompt('何か好きな文字を入れてください。');

alert(promptStr);
*/

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
    alert('グー・チョキ・パーのいずれかを入力してください')
    user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください');
}

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null){
    alert('あなたの選んだては' + user_hand + 'です。\nJavaScriptの選んだては' + js_hand + 'です。\n結果は' + judge + 'です');
}else{
    alert('またチャレンジしてね');
}

function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );

    if(js_hand_num == 0){
        js_hand = "グー";
    }else if(js_hand_num == 1){
        js_hand = 'チョキ';
    }else if(js_hand_num =- 2){
        js_hand = 'パー';
    }

    return js_hand;
}

function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";   
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}