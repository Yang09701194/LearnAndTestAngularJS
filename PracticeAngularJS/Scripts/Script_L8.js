
var myApp = angular.module("myModule", [])
        .controller("myController", function($scope){

            $scope.employees = [
                { name: "Ben", dateOfBirth:new Date("November 23, 1990"), gender: "Male" , salary : 55000.788 },
                { name: "Sara", dateOfBirth:new Date("May 05 ,1970"), gender: "Male" , salary : 68000 },
                { name: "Mark", dateOfBirth:new Date("August 15 ,1974"), gender: "Female" , salary : 57000 },
                { name: "Pam", dateOfBirth:new Date("October 27 ,1979"), gender: "Male" , salary : 53000 },
                { name: "Todd", dateOfBirth:new Date("October 30 ,1983"), gender: "Female" , salary : 60000 }
            ];

            $scope.rowLimit = 3;

        });





