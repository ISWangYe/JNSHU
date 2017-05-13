/**
 * Created by Administrator on 2017/4/23.
 */
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
function back() {
    window.location.href="js-edi-chose.html";
}
function getNum1() {
    if (num1.value<4||num1.value>18){
        alert("请输入正确的人数范围:4~18");
        num1.value=null;
    }
    else {
        num2.value=num1.value;
    }
}
function getNum2() {
    num1.value=num2.value;
}
function addNum() {
    num2.value++;
    num1.value=num2.value;
}
function lesNum() {
    num2.value--;
    num1.value=num2.value;
}
var all=[];
var killer=[];
var allid=document.getElementById("allid");
function peop() {
    for (var a=0;a<num1.value; a++){
        all[a]="平民";
    }
    all.length=num1.value;
    killer=Math.floor(all.length/4);
    for (var random,i=0; i<killer; i++){
        do {
            random=Math.floor(Math.random()*all.length)
        }
        while (all[random]==="杀手"){
            all[random]="杀手";
        }
    }
    // Group=all;
 }
function allot() {
    peop();
    var toscreen="";
    for (var i=0;i<all.length;i++){
        toscreen=toscreen+"<span class='main-fenpei-right-son'>"+(i+1)+"号身份："+all[i]+"</span>";
    }
    console.log(all);

    allid.innerHTML=toscreen;
}
function next() {
    if (all.length!=num1.value){
        alert("请先设置人数");
    }
    else {
        sessionStorage.setItem("renshu",JSON.stringify(all));
        window.location.href="js-check-id.html";
    }
}