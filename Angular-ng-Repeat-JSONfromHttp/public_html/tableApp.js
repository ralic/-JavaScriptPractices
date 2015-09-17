/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('tableApp', []);
app.controller('customersCtrl', function ($scope, $http) {

    // Change header to different color
    $scope.TableHeaderStyle = {
        "text-align": "center",
        "background": "cyan"
    };
    // Change inner text to be initial capital
    $scope.textStyleCap = {
        "text-transform": "capitalize",
        "width": "60px"
    };
    $scope.cellStyle = {
        "text-align": "left",
        "width": "200px"
    };
    // Retrive data from a JSON http address
    $http.get("http://api.randomuser.me/0.4/?results=10")
            .success(function (response) {
                $scope.names = response.results;
            });
});
