/**
 * Created by Administrator on 2017/5/12.
 */
//具体怎么发生作用的还不会，原理就是接受传递过来的参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
if (getQuery("ischange") == 1){
    $('#killwin').css("display","none");
    $('#peowin').css("display","block")
}
var allDie = JSON.parse(sessionStorage.getItem("allDie"));
var day = JSON.parse(sessionStorage.getItem("day"));
console.log(allDie);
console.log(day);
for(var a=0; a<day;a++){
    $('.wrap').html($('.min-his').append('<div class="min-his-time"><p class="day">'
    +"第"+(a+1)+"天"+'</p></div>'
        +'<div class="min-his-inf">' +"晚上："
        +(allDie[a].num+1)+"号被杀手杀死，其身份是"+allDie[a].id+'</div>'
        +'<div class="min-his-inf">' +"白天："
        +(allDie[a+1].num+1)+"号被投票出局，其身份是"+allDie[a+1].id+'</div>'
    ))
}
$('#again').click(
    function () {
        //清除数据
        sessionStorage.removeItem('states');
        sessionStorage.removeItem('star');
        sessionStorage.removeItem('day');
        sessionStorage.removeItem('renshu');
        sessionStorage.removeItem('allDie');
        window.location.href="js-id-setting.html"
    }
);