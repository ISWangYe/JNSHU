/**
 * Created by Administrator on 2017/5/16.
 */
//路由
var app = angular.module("bgApp",['ui.router', 'ngMessages','angularFileUpload']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/welcome");
    $stateProvider
        .state("welcome", {
            url: "/welcome",
            templateUrl: "welcome.html"
        })
        .state("article-list", {
            // params:{"status":"","type":"","startAt":"","endAt":""},
            url:"/article-list?status&type&endAt&startAt&page",
            templateUrl: "article-list.html",
            controller:'listCtrl'
        })
        .state("article-detail", {
            url:"/article-detail?id",
            templateUrl: "article-detail.html",
             controller:'detail',
        })
        .state("article-add", {
            url:"/article-add",
            templateUrl: "article-add.html",
            controller:'add',
        })
});

// angular.module('change',['ngRoute'])
// .config([
//     '$routeProvider',
//     function ($routeProvider) {
//         $routeProvider
//             .when('/background',{
//                 templateUrl:'background.html',
//                 controller : 'bgController'
//             })
//             .when('/article-list',{
//                 templateUrl:'article-list.html',
//                 controller : 'listController'
//             })
//             .when('/article-detail',{
//                 templateUrl:'article-detail.html',
//                 controller : 'detailController'
//             })
//             .otherwrise('/background')
//     }
// ])

//ng-router写法
// angular.module('myctrl',['ngRoute'])
//     .config(['$routeProvider', function($routeProvider){
//         $routeProvider
//             .when('/',{template:'这是首页页面'})
//             .when('/article-list',
//                 {templateUrl:'article-list.html'},
//                 {controller:'listCtrl'}
//                 )
//             .when('/article-detail',{templateUrl:'article-detail.html'})
//             .otherwise({redirectTo:'/'});
//     }]);

