/**
 * Created by Administrator on 2017/5/18.
 */
app.controller('listCtrl',function ($scope,$http,$stateParams) {
    //对象初始化
    $scope.listParams= {};
    $scope.getMsg=function () {
        $scope.listParams.startAt=Date.parse($scope.startAt);
        $scope.listParams.endAt=Date.parse($scope.endAt);
        if($scope.listParams.startAt == $scope.listParams.endAt ){
            $scope.listParams.endAt = $scope.listParams.startAt+1000*60*60*24-1;
        }
        if(isNaN($scope.listParams.startAt)){
            $scope.listParams.startAt= ""
        }
        if(isNaN($scope.listParams.endAt)){
            $scope.listParams.endAt= ""
        }
        $http({
            method:"get",
            url:"/a/article/search",
            params:$scope.listParams
        }).then(
            //请求成功返回参数
            function success(responce) {
                $scope.data = responce.data.data.articleList;
                //总页数向上取整
                $scope.total = Math.ceil(responce.data.data.total/responce.data.data.size)
            },
            function error(responce) {
            }
        );
    };
    if($stateParams!=undefined)  {
        $scope.listParams=$stateParams;
        console.log($scope.listParams);
        $scope.startAt=new Date($scope.listParams.startAt);
        $scope.endAt= new Date($scope.listParams.endAt);
        $scope.listParams.page = 1;
        $scope.getMsg();
    }
    else {
        $scope.listParams= {page:1};
        $scope.getMsg();
    };

    //获取服务器数据
    //搜索函数
    // $scope.searchMsg = function () {
    //     $scope.listParams.startAt = Date.parse($scope.startAt);
    //     $scope.listParams.endAt = Date.parse($scope.endAt);
    //     if ($scope.listParams.startAt < $scope.listParams.endAt) {
    //         $scope.listParams.endAt=$scope.listParams.endAt+1000*60*60*24-1;
    //     }
        //选中时间相等的时候会导致搜索错误，当相等的时候使后一天增加23小时59分钟，这样就搜索时间区间了
        // if($scope.listParams.startAt == $scope.listParams.endAt ){
        //     $scope.listParams.endAt = $scope.listParams.startAt+1000*60*60*24-1;
        // }
        // if(isNaN($scope.listParams.startAt)){
        //     $scope.listParams.startAt= ""
        // }
        // if(isNaN($scope.listParams.endAt)){
        //     $scope.listParams.endAt= ""
        // }
        // $scope.listParams.page = 1;
        // $scope.getMsg();
    // };
    //重置参数
    // $scope.resetMsg=function () {
    //     $scope.startAt = '';
    //     $scope.endAt = '';
    //     $scope.listParams= {page:1};
    //     $scope.getMsg();
    // };
    //上下线函数
    $scope.changeStatus = function (id,status) {
        if (status == 1){
            status = 2 ;
        }
        else{
            status = 1 ;
        }
        $http({
            method:'put',
                url:"/a/u/article/status",
                params:{
                    id:id,
                status:status
            }
        })
            .then(
                function success(responce) {
                    if(responce.data.code == 0){
                        alert("修改成功");
                        $scope.getMsg()
                    }else {
                        alert("修改失败"+responce.data.message);
                    }
                },
                function error(responce) {
                    console.log("失败"+responce.data);
                    alert("修改失败，请重新登录")
                }
            )
    };
    //删除信息
    $scope.delMsg = function (id) {
        if (confirm("确认删除？")) {
            $http({
                method: 'delete',
                url: '/a/u/article/' + id
            }).then(function success(responce) {
                console.log(responce);
                if(responce.data.code==0){
                    alert("删除成功");
                }
            }, function error(responce) {
                // 请求失败执行代码
                alert("请求失败"+responce.data.message)
            });
            $scope.getMsg();
        }
    };
    //首页
    $scope.firstPage = function () {
        $scope.listParams.page = 1;
        $scope.getMsg();
    };
    //上一页
    $scope.prePage = function () {
        if ($scope.listParams.page>1){
            $scope.listParams.page--;
        }else {
            alert("这已经是第一页了！")
        }
        $scope.getMsg();
    };
    // 查找页
    $scope.inputPage = function () {
        if(isNaN($scope.listParams.page)){
            alert("请输入数字");
            $scope.listParams.page = 1;
        }
        else {
            if ($scope.listParams.page < 1) {
                $scope.listParams.page = 1;
            } else if ($scope.listParams.page >= 1 &&  $scope.listParams.page <=$scope.total){
            } else {
                alert("最大页数为："+$scope.total);
                $scope.listParams.page = $scope.total;
            }
            $scope.getMsg();
        }
    };
    //下一页
    $scope.nextPage = function () {
        if($scope.listParams.page<$scope.total){
            $scope.listParams.page++;
        }else {
            alert("这已经是最后一页了！")
        }
        $scope.getMsg();
    };
    //末页
    $scope.lastPage = function () {
        $scope.listParams.page = $scope.total;
        $scope.getMsg();
    }
});

