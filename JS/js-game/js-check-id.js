/**
 * Created by Administrator on 2017/4/26.
 */
function back() {
    window.location.href="js-id-setting.html";
}
var allId=JSON.parse(sessionStorage.getItem("renshu"));
console.log(allId);
var clickNum=1;
//以点击次数作为判断条件，
var playerNum=2;
//设置玩家序号，
$('.wrap-btn').click(
    function () {
        clickNum++;
        if (clickNum>allId.length*2){
            window.location.href="js-judge-page.html?ischange=4";
        }
        else if( clickNum % 2 == 0) {
            $('.img1').css("display","none");
            $('.img2').css("display","block");
            //根据点击次数设置图片的显示
            $('#buzu').css("display","none");
            //函数是点击运行的，所以要在未运行的时候添加默认文字，当函数运行则隐藏
            $('.shenfen').text('身份：'+allId[playerNum-2]);
            $('.wrap-btn').text('隐藏并传递给' + playerNum + '号');
            playerNum++;
        }
        else {
            $('.img1').css("display","block");
            $('.img2').css("display","none");
            //根据点击次数设置图片的显示
            $('#buzu').css("display","none");
            //函数是点击运行的，所以要在未运行的时候添加默认文字，当函数运行则隐藏
            $('#circle').text(playerNum-1);
            $('.shenfen').text("");
            $('.wrap-btn').text("查看"+(playerNum-1)+"号身份");
        }
        if(playerNum-2 == allId.length){
            $('.wrap-btn').text("法官查看");
        }
        console.log(playerNum);
    }
)
