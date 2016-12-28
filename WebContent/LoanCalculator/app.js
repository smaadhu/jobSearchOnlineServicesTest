var app = angular.module('loanCalculator', []);
app.controller('parentController', function($scope, $http) {
	$scope.principle = 0;
	$scope.interest = 0;
	$scope.length = 0;
	$scope.mothlyPayment = 0;
	$scope.myWelcome = '';
	
	$scope.calculateInterest = function(){
		var request = {priciple:$scope.principle, interest : $scope.interest, length:$scope.length};
		//$scope.mothlyPayment = ($scope.principle * $scope.interest * Math.pow((1+$scope.interest),$scope.length))/(Math.pow((1+$scope.interest),$scope.length)-1)
		$http({
		    method : "POST",
		    url : "http://192.168.1.6:8080/calculator/myresource",
		    data : request
		  }).then(function mySucces(response) {
		      $scope.myWelcome = response.data;
		    }, function myError(response) {
		      $scope.myWelcome = response.statusText;
		  });
	}
});