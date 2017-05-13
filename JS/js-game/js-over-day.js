/**
 * Created by Administrator on 2017/5/4.
 */
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var allDie = JSON.parse(sessionStorage.getItem("allDie"));
var states=JSON.parse(sessionStorage.getItem("states"));
console.log(states)
var livePeo = [];
var killLive = [];
var peopLive = [];
//获取存活玩家名单
for(var b=0; b<states.length; b++){
    if(states[b].alive == "yes"){
        livePeo.push(states[b])
    }
}
console.log(livePeo)
//判断存活玩家身份
for(var c=0; c<livePeo.length; c++){
    if(livePeo[c].id == "杀手"){
        killLive.push(livePeo[c])
    }else {
        peopLive.push(livePeo[c])
    }
}
for(var a=0; a<allDie.length; a++){
    if (getQuery("ischange") == 3) {
        //执行更改底部标签文字的操作
        $('.tiaozhuan').css("display","none");
        $('.nextday').css("display","block");
        $('.wrap-his').append(
            "<div class='span'>"+(allDie[a].num+1)+"号玩家被投出局，其身份是"+allDie[a].id+"</div>"
        )
    }else {
        $('.wrap-his').append(
            "<span>"+(allDie[a].num+1)+"号玩家被杀死了，其身份是"+allDie[a].id+"</span>"
        )
    }
}
if(killLive.length == peopLive.length){
    $('.tiaozhuan').css("display","none");
    $('.nextday').css("display","none");
    $('.killvictory').css("display","block");
    //杀手胜利
}else if(killLive.length == 0){
    $('.nextday').css("display","none")
    $('.tiaozhuan').css("display","none");
    $('.peopvictory').css("display","block");
    //平民胜利
}
$('.nextday').click(
    function () {
        //每次天黑天数增加，取出并存储
        var day=JSON.parse(sessionStorage.getItem("day"));
        day++;
        sessionStorage.setItem("day",JSON.stringify(day));
    }
);
$('.tiaozhuan,.nextday').click(
    function () {
        window.location.href="js-judge-diary.html"
    }
);

$('.peopvictory').click(
    function () {
        window.location.href="js-game-over.html?ischange=1"
    }

)
$('.killvictory').click(
    function () {
        window.location.href="js-game-over.html"
    }

)
$('#close').click(
    function () {
        window.location.href="js-id-setting.html"
    }
);