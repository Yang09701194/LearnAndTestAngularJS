/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])

var myController = function($scope){
    $scope.message = "AngularJS Tutorial";

    var employee = {
        firstName : "David",
        lastName : "Hastings",
        gender : "Male"
    };

    $scope.employee = employee;

}   

myApp.controller("myController", myController);



