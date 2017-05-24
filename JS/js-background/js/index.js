/**
 * Created by Administrator on 2017/5/15.
 */
//angular写法
var app = angular.module('indexApp',[]);
app.controller('indexCtrl',function ($scope,$http) {
    $scope.enter=function () {
        $http({
            method:"post",
            url:"a/a/login",
           params:{
                name:$scope.name,
                pwd:$scope.pwd
            }
        }).then(
                function successCallback(reponse) {
                    console.log(reponse)
                    //.判断接口返回参数是否正确，正确则跳转，错误弹出警示框
                    if (reponse.data.code == 0){
                        window.location.href="../html/background.html";
                    }else {
                        alert("错误的帐户名或密码！")
                    }
                },
                function errorCallback(reponse) {
                }
            )
    }
});
// ajax设置
// $(function () {
//     $('#send').click(function () {
//         $.ajax({
//             type:"Post",
//             url:"a/a/login",
//             data: {
//                 name: $('#name').val(),
//                 pwd:$('#pwd').val()
//             },
//             success:function () {
//                 window.location.href="../html/background.html";
//                 // alert(data)
//             }
//         })
//     })
// });

// 原生写法
// $(function () {
//     $("#send").click(function () {
//         var user = $('#name').val(),
//             pass = $('#pwd').val(),
//             inputCode=$(".codeinput").val()
//         // if(code==inputCode){
//         var request = new XMLHttpRequest();
//         request.open("POST","a/a/login",true);
//         request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         request.send("name="+user+"&pwd="+pass);
//         request.onreadystatechange = function () {
//             if (request.readyState === 4) {
//                 if (request.status === 200) {
//                     var json=JSON.parse(request.responseText);
//                     console.log(json);
//                     if(json.code===0){
//                         window.location.href="panel.html#/list";
//                     }
//                     else {
//                         $(".pasdiv").text(json.message);
//                     }
//                 } else {
//                     alert("错误")
//                 }
//             }
//         }
//
//     })
// });
