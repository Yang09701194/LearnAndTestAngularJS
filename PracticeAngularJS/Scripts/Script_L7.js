


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "VB", likes: 0, dislikes: 0 },
            { name: "Docker", likes: 0, dislikes: 0 }
        ];


        $scope.incrementDislikes = function (technology) {
            technology.dislikes++;
        }
        $scope.incrementLikes = function (technology) {
            technology.likes++;
        }

    });





