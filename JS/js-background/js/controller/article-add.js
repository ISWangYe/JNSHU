/**
 * Created by Administrator on 2017/5/29.
 */
app.controller('add',function ($scope,$upload,$http,$state,allSel) {
    //导入数据
    $scope.type =allSel.textype;
    $scope.hangye = allSel.textstatus;
    $scope.addParams = {};
    //图片上传
    var imgPreview=document.getElementById("imgPreview");
    // 上传文件
    $scope.onFileSelect = function($files) {    //$files:是已选文件的名称、大小和类型的数组
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            console.log(file);
            /*文件上传函数*/
            $scope.upload = $upload.upload({
                url: '/a/a/u/img/task', //上传的url
                method: 'POST',
                file: file
            }).progress(function(evt) {//上传进度
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                // 文件上传成功处理函数
                alert("上传成功");
                console.log(data);
                $scope.addParams.img=data.data.url;
            }).error(function(data, status, headers, config) {
                //失败处理函数
                console.log('上传失败');
            });
        }
    };
    //发送请求
    $scope.addInfo = function () {
        // delete $scope.addParams.author
        $http({
            method: 'post',
            url: '/a/a/u/article',
            params:$scope.addParams
        }).then(
            //请求成功返回参数
            function success(responce) {
                if (responce.data.code == 0){
                    alert("上传成功");
                    $state.go('article-list')
                }
            },
            function error(responce) {
                alert("上传失败"+responce.message);
            }
        );
    };
    // 引入wangEditor
    $scope.content = '';
});