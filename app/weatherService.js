var app = angular.module('directivePractice');
app.service('weatherService', function($http, $q){

	this.getWeather = function(city){
		var deferred = $q.defer();
		$http({
			method: 'GET', 
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city}).then(function(data){
				deferred.resolve({
					temperature: parseInt(data.data.main.temp - 273.15) * 1.8000 + 32,
					weather: data.data.weather[0].description
				})
				
			});
			return deferred.promise;
	}
});