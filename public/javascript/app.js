(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('Problems',{
			url: '/problems',
			templateUrl: 'views/problems.html'
		}).state('Solutions',{
			url: '/solutions',
			templateUrl: 'views/solutions.html'
		});
		// state('CreateProblem',{
		// 	url: '/createProblem',
		// 	templateUrl: 'views/createProblem.html'
		// });
$urlRouterProvider.otherwise('/');
}
})();
