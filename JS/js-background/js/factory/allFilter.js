/**
 * Created by Administrator on 2017/5/24.
 */
app.filter('typeFliter',function () {
    var typeAll = ["首页banner","找职位banner","找精英banner","行业大图"];
    return function (type) {
        return type = typeAll[type];
    }
});
app.filter('statusFilter',function () {
    var statusAll =["草稿","上线"];
    return function (status) {
        return status = statusAll[(status-1)];
    }
});
app.filter('buttonFilter',function () {
    var statusAll =["上线","下线"];
    return function (status) {
        return status = statusAll[(status-1)];
    }
});
