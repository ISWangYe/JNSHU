/**
 * Created by Administrator on 2017/5/18.
 */
app.controller('listCtrl',function ($scope,$http) {
    $scope.qwe=function () {
        $http({
            method:"get",
            url:"/a/a/article/search"
        }).then(
            function success(responce) {
                console.log(responce);
                $scope.data=responce.data.data.articleList;
            },
            function error(responce) {
            }
        )
    };
    $scope.qwe();
});

