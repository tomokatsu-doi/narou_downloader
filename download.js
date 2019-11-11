var url = location.href;

var arr = url.split('/');
var ncode = arr[3];
var episode_num = arr[4];

if(episode_num == undefined ){
//dl all
}

var ncode_chars = ncode.split('');
var num1 = Number(ncode_chars[1] + ncode_chars[2] + ncode_chars[3] + ncode_chars[4])

var a_ord = "a".charCodeAt(0);

if (ncode_chars[5] == undefined) {
    var num2 = 0;
}else{
    var num2 = (ncode_chars[5].charCodeAt(0) - a_ord) * 26;
}

if (ncode_chars[6] == undefined) {
    var num3 = -1 * a_ord;
}else{
    var num3 = (ncode_chars[6].charCodeAt(0) - a_ord);
}
var id = num1 + (num2 + num3) * 9999;

var action = "/txtdownload/dlstart/ncode/" + id + "/?no=" + episode_num + "&hankaku=0&code=utf-8&kaigyo=crlf";

document.body.appendChild((function(){
    var jq = document.createElement("script");
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    return jq;
  })());

$.post(action, {}, function(result) {
    var blob = new Blob([result], {type: "text/plain"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = "_blank";
    a.download = ncode + "_" + episode_num + ".txt";
    a.click();
});
