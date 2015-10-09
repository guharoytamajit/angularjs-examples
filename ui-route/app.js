angular.module("app",['ui.router'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
$urlRouterProvider.otherwise("/");
$stateProvider
.state('home',{
url:"/",
templateUrl:'templates/home.html',
controller:'HomeCtrl',
resolve:{
friends:['HomeService',function(HomeService){
 return HomeService.get();
 }]
}
})
.state('about',{
url:"/about",
templateUrl:'templates/about.html'
});
}])
.controller("HomeCtrl",function($scope,friends){
$scope.list=friends;
})
.controller("AboutCtrl",function($scope){})
.factory("HomeService",function(){
return 	{get:function(){return ["A","B","C"]}}
 })
.factory	("AboutService",function(){})
;