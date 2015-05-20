var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'app/home/homeTemplate.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})
});
