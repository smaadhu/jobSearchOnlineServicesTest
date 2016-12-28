var app = angular.module('loanCalculator', []);
app.controller('parentController', function($scope, $http) {
	$scope.principle = 10000;
	$scope.interest = 3;
	$scope.length = 24;
	$scope.mothlyPayment = 0;
	
	$scope.calculateInterest = function(){
		console.log("Entered Loop")
		$scope.mothlyPayment = ($scope.principle * $scope.interest * Math.pow((1+$scope.interest),$scope.length))/(Math.pow((1+$scope.interest),$scope.length)-1)
		$http({
		    method : "POST",
		    url : "http://192.168.1.6:8080/calculator/myresource",
		    data : "Hello"
		  }).then(function mySucces(response) {
		      $scope.myWelcome = response.data;
		    }, function myError(response) {
		      $scope.myWelcome = response.statusText;
		  });
	}
});