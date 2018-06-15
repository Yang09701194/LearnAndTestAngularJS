/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])

var myController = function ($scope) {
    $scope.employees = [
        { firstName: "F1", lastName: "L1", gender: "Male", salary: 100000 },
        { firstName: "F2", lastName: "L2", gender: "Female", salary: 90000 },
        { firstName: "F3", lastName: "L3", gender: "Male", salary: 80000 },
        { firstName: "F4", lastName: "L4", gender: "Female", salary: 70000 }
    ]

    $scope.countries = [
        {
            name: "UK",
            cities: [
                {name:"London"},
                {name:"Manchester"},
                {name:"Birmingham"},
            ]
        },
        {
            name: "USA",
            cities: [
                {name:"Los Angeles"},
                {name:"Chicago"},
                {name:"Houston"},
            ]
        },
        {
            name: "India",
            cities: [
                {name:"Hyderabad"},
                {name:"Chennai"},
                {name:"Mumbai"},
            ]
        }
    ]


}

myApp.controller("myController", myController);

