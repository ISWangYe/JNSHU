/**
 * Created by Administrator on 2017/5/16.
 */
var app = angular.module("bgApp",['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/welcome");
    $stateProvider
        .state("welcome", {
            url: "/welcome",
            templateUrl: "welcome.html"
        })
        .state("article-list", {
            url:"/article-list",
            templateUrl: "article-list.html",
            controller:'listCtrl'
        })
        .state("article-detail", {
            url:"/article-detail",
            templateUrl: "article-detail.html"
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

