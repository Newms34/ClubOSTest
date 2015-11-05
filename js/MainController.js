var app = angular.module("tweetus", []);

app.controller("MainController", function($scope, $window, $http) {
	$scope.test='hello world'
    $scope.numTweets = Math.floor(Math.random()*150);
    
});