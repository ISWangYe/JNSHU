/**
 * Created by Administrator on 2017/5/18.
 */
app.controller('detail',function ($scope,$http,$state,$stateParams,type,status) {
    //导入数据
    $scope.type =type;
    $scope.hangye = status;
    $scope.detailParams = {};
    $scope.id=$stateParams.id;
    //图片上传
    // $scope.onFileSelect = function($files) {    //$files:是已选文件的名称、大小和类型的数组
    //     for (var i = 0; i < $files.length; i++) {
    //         var file = $files[i];
    //         console.log(file);
    //         /*文件上传函数*/
    //         $scope.upload = $upload.upload({
    //             url: '/a/a/u/img/task', //上传的url
    //             method: 'POST',
    //             file: file
    //         }).progress(function(evt) {//上传进度
    //             console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
    //         }).success(function(data, status, headers, config) {
    //             // 文件上传成功处理函数
    //             alert("上传成功");
    //             console.log(data);
    //             $scope.detailParams.img=data.data.url;
    //         }).error(function(data, status, headers, config) {
    //             //失败处理函数
    //             console.log('上传失败');
    //         });
    //     }
    // };
    $http({
        method:'get',
        url:'/a/article/'+$scope.id
    }).then(function  success(responce) {
            console.log(responce);
            if(responce.data.code == 0){
                $scope.detailParams =  responce.data.data.article;
            }else{
                alert("请求失败"+responce.data.message)
            }
        }, function error(responce) {
            // 请求失败执行代码
            alert("请求失败"+responce.data.message)
        }
    )
    //发送请求
    $scope.addInfo = function () {
        $http({
            method: 'put',
            url: '/a/u/article/'+$scope.id,
            params:$scope.detailParams
        }).then(
            //请求成功返回参数
            function success(responce) {
                if (responce.data.code == 0){
                    alert("上传成功");
                    $state.go('article-list')
                }
            },
            function error(responce) {
                alert("失败"+responce.data.message)
            }
        );
    }
});
//编辑器
app.directive('contenteditable', function() {
    return {
        restrict: 'A' ,
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
            // 初始化 编辑器内容
            if (!ngModel) {
                return;
            }
            ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
            };
            element.on('blur keyup change', function() {
                scope.$apply(readViewText);
            });
            function readViewText() {
                var html = element.html();
                if (attrs.stripBr && html === '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
            // 创建编辑器
            var editor = new wangEditor(element);
            editor.create();
        }
    };
});