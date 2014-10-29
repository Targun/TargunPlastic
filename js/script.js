var app = angular.module('targun', []);

app.controller('targunCtrl', function ($scope) {
	$scope.aboutPart = true;
	$scope.primePart = false;
	$scope.contactPart = false;

	$scope.openAbout = function(){
		$scope.aboutPart = true;
		$scope.primePart = false;
		$scope.contactPart = false;
	}
	$scope.openPrime = function(){
		$scope.primePart = true;
		$scope.aboutPart = false;
		$scope.contactPart = false;
	}
	$scope.openContact = function(){
		$scope.contactPart = true;
		$scope.aboutPart = false;
		$scope.primePart = false;
	}


	$scope.exitAbout = function(){
		$scope.aboutPart = false;
	}
	$scope.exitPrime = function(){
		$scope.primePart = false;
	}
	$scope.exitContact = function(){
		$scope.contactPart = false;
	}
});


















