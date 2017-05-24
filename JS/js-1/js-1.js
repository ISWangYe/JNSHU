//调取每个小格子的DOM，建立颜色和随机数数组
var sbox=document.getElementsByClassName("sbox");
var num=[];
var color=[];
//为随机数和颜色赋值
function spccal() {
    for(var i=0; i<3; i++){
        num[i]=(Math.floor(Math.random()*9));
        color[i]="#"+Math.floor(Math.random()*0xffffff).toString(16);
    }
    //随机数去重,随机的十六进制颜色会出现长度少于7位的颜色，这种颜色会无法转换成rgb颜色，
    // 后果就是函数正常运行，却会出现随机一个小格子无法真确赋值颜色。所以需要进行非7位颜色的去重
    if (num[0]==num[1] || num[0]==num[2] || num[2]==num[1]||color[i]=="#ffa500"||color[0].length!=7||color[1].length!=7||color[2].length!=7){
        spccal()
    }
}
function reset() {
    for(var i=0;i<9;i++){
        sbox[i].style.backgroundColor="#ffa500";
    }
}
console.log(color);
//改变小格子的颜色
function change(){
    //重置小格子的颜色
    reset();
    //调取赋值函数
    spccal();
    //随机选取小格子并进行颜色赋值
    sbox[num[0]].style.backgroundColor=color[0];
    sbox[num[1]].style.backgroundColor=color[1];
    sbox[num[2]].style.backgroundColor=color[2];
    console.log(color);
    console.log(num);
    
}
var q
function changeColor() {
    clearInterval(q)
    q=setInterval(change,1000)
}
function over() {
    clearInterval(q)
    reset()
}
function stop() {
    clearInterval(q)
}
