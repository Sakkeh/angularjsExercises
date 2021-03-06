// Define the taxdata module
var taxdata = angular.module('taxdata', ['ngRoute', 'restangular']);

// Define the `MainController` controller on the `taxdata` module
taxdata.controller('MainController', function MainController($scope) {
  $scope.queries = [
    {
      querydate: '1.3.2017',
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.',
      received: '14.3.2017'
    }, {
      querydate: '1.3.2017',	
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.',
      received: '12.3.2017'
    }, {
      querydate: '1.3.2017',
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.',
      received: '11.3.2017',
    }
  ];
  
  $scope.appName = "TaxData Application";
  
});

taxdata.factory('UserService', ['Restangular', function(Restangular){
	
}]);

// Use templateUrl to use external template
// ngRoute doesn't allow multiple views -> ui-router does
taxdata.config(function config($routeProvider) {
      
	$routeProvider
	.when('/', {
		templateUrl: 'main.html'
	})
	.when('/taxdata', {		
		templateUrl: 'taxdata.html'
	})
	.otherwise({
		/*template: 'Otherwise'*/
		redirectTo: '/'
	});    
});

/* Basic template without external template file
taxdata.config(function config($routeProvider) {
      
	$routeProvider
	.when('/', {
		template: 'Welcome user!'
	})
	.when('/taxdata', {
		template: 'Taxdata page!!!'
	})
	.otherwise({
		redirectTo: '/'
	});    
}); */

