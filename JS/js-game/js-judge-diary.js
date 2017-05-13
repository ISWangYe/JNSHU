/**
 * Created by Administrator on 2017/5/2.
 */
//取出天数数据，显示到页面上边
var day=JSON.parse(sessionStorage.getItem("day"));
$('.days').html("第"+day+"天");
var click = 1 ;
$('#closeyes').click(
    function () {
        $('#closeyes').css({
            'background-color':'gray',
            'cursor': 'not-allowed'
        })
    }
);
$('#ghost').click(
    function () {
        $('#ghost').css({
            'background-color':'gray',
            'cursor': 'not-allowed'
        })
    }
);
$('#deadsay').click(
    function () {
        $('#deadsay').css({
            'background-color':'gray',
            'cursor': 'not-allowed'
        })
    }
);
$('#aliveturn').click(
    function () {
        $('#aliveturn').css({
            'background-color':'gray',
            'cursor': 'not-allowed'
        })
    }
);
if (click == 1){
    $('#killsomebody').click(
        function () {
            window.location.href="js-judge-page.html?ischange=1"
            //传递参数作为判断条件，根据不同参数对页面进行调整
        }
    );
}

$('#vote').click(
    function () {
        window.location.href="js-judge-page.html?ischange=3"
        //传递参数作为判断条件，根据不同参数对页面进行调整
    }
);
