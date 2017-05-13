/**
 * Created by Administrator on 2017/4/28.
 */
var allId=JSON.parse(sessionStorage.getItem("renshu"));
// 取出数组
$('.back').click(
    function () {
        window.location.href="js-id-setting.html";
    }
);
//循环输出i-1个样式到min中
for(var i=0; i<allId.length; i++){
    $('#min').append(
        "<div class='wrap'><div class='idc'>"
        +"<div class='people'>"+allId[i]+"</div>"
        +"<div class='number'>"+(i+1)+"号"+"</div>"
        +"</div></div>"
    )
}

//统一按钮跳转页面
$('#begin').click(
    function () {
        //开始计入天数
        var day = 1;
        sessionStorage.setItem("day",JSON.stringify(day));
        window.location.href="js-judge-diary.html"
    }
);
//具体怎么发生作用的还不会，原理就是接受传递过来的参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//这里应该是判断参数值，执行操作
if (getQuery("ischange") == 4) {
    //开始游戏页面无法杀人
    states=null;
}
//获取身份牌的DOM
var peopleAll=$(".people");
// 储存每个玩家状态的数组
var states = [];
var diedpeo = [];
// 所有死亡玩家集合
var allDie = [];
for (var a=0; a<allId.length; a++){
    states[a]= {};
    states[a].id = allId[a];//玩家身份与状态数组匹配
    states[a].alive = "yes";//玩家默认状态是活着
}
//杀人逻辑，
if (getQuery("ischange") == 1) {
    //判断是否存在“start”，没有的话就是第一天杀人。在杀手杀人之后会将“start”存储，这样第二天开始之后每天都会取出前一天的数据，
    if(sessionStorage.getItem("star")){
        var states=JSON.parse(sessionStorage.getItem("states"));
        var allDie=JSON.parse(sessionStorage.getItem("allDie"));
    }
    //更改标签文字
    $('#begin').css("display","none");
    $('#killsomebody').css("display","block");
    console.log(states);
    //将已经死掉的人改变颜色，使其不能被杀
    for(var b=0;b<states.length; b++){
        if (states[b].alive == "died"){
            peopleAll[b].style.backgroundColor="gray";
            peopleAll[b].style.cursor="not-allowed";
        }
    }
    for(var c=0; c<states.length;c++){
        peopleAll[c].index=c;
        peopleAll[c].onclick = function () {
            //使死掉的玩家不被点击
            if (states[this.index].alive == "died"){
                alert("嘎哈，还想鞭尸，信不信晚上找你去！")
            }
            else {
                if (states[diedpeo]!=undefined){
                    peopleAll[diedpeo].style.background = "#f5c97b";
                    states[diedpeo].alive = "yes"
                }
                peopleAll[this.index].style.background = "gray";
                states[this.index].alive = "died"
                states[this.index].num = this.index;
                diedpeo = this.index;
                star = 1;//存储数据，作为循环的判断条件
            }
        };
    }
    $('#killsomebody').click(
        function () {
            allDie.push(states[diedpeo])
            sessionStorage.setItem("allDie",JSON.stringify(allDie));
            sessionStorage.setItem("states",JSON.stringify(states));
            sessionStorage.setItem("star",JSON.stringify(star));
            window.location.href="js-over-day.html?ischange=4"
        }
    );
}
//投票逻辑
if (getQuery("ischange") == 3) {
    //更改标签文字
    $('#begin').css("display","none");
    $('#vote').css("display","block");
    //取出杀人存储的数据
    var allDie=JSON.parse(sessionStorage.getItem("allDie"));
    var states=JSON.parse(sessionStorage.getItem("states"));
    console.log(states)
    //将已经死掉的人改变颜色，使其不能被杀
    for(var b=0;b<states.length; b++){
        if (states[b].alive == "died"){
            peopleAll[b].style.backgroundColor="gray";
            peopleAll[b].style.cursor="not-allowed";
        }
    }
    for(var c=0; c<states.length;c++){
        peopleAll[c].index=c;
        peopleAll[c].onclick = function () {
            //使死掉的玩家不被点击
            if (states[this.index].alive == "died"){
                alert("嘎哈，还想鞭尸，信不信晚上找你去！")
            }
            else {
                if (states[diedpeo]!=undefined){
                    peopleAll[diedpeo].style.background = "#f5c97b";
                    states[diedpeo].alive = "yes"
                }
                peopleAll[this.index].style.background = "gray";
                states[this.index].alive = "died"
                states[this.index].num = this.index;
                diedpeo = this.index;
            }
        };
    }
    $('#vote').click(
        function () {
            allDie.push(states[diedpeo])
            sessionStorage.setItem("allDie",JSON.stringify(allDie));
            sessionStorage.setItem("states",JSON.stringify(states));
            window.location.href="js-over-day.html?ischange=3"
        }
    );
}