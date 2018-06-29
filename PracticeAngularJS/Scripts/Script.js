/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])

var myController = function ($scope) {
    $scope.message = "AngularJS Tutorial";

    var employee = {
        firstName: "David",
        lastName: "Hastings",
        gender: "Male"
    };

    var country = {
        name: "Taiwan",
        capital: "Taipei",
        flag: "Images/advice-vaccines-taiwan.jpg"
    };

    $scope.employee = employee;
    $scope.country = country;

}

myApp.controller("myController", myController);

//可以直接把duncrion  放在 Controller 第二個參數   
//myApp.controller("myController",  function($scope){
//   $scope.message = "AngularJS Tutorial";)  ..... 
//}

//也可以用類似  nhibernate 的  程式碼的config方式   用  function串聯的方式  或是連珠砲?
//或者是LINQ的連續查詢
//angular.module("myModule", [])
//.controller("myController",  function($scope){
//   $scope.message = "AngularJS Tutorial";)  ..... 
//})

