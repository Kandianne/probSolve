(function() {
	'use strict';
	var app = angular.module('app', ['ui.router', 'ngMaterial', 'ngAnimate']);
	app.config(Config);

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
		}).state('Profile',{
			url: '/profile',
			templateUrl: 'views/profile.html'
		}).state('ProblemDetail',{
			url: '/ProblemDetail/:probId',
			templateUrl: 'views/problemDetail.html'
		}).state('SolutionDetail',{
			url: '/SolutionDetail/:solId',
			templateUrl: 'views/solutionDetail.html'
		});
		$urlRouterProvider.otherwise('/');
	}

	app.animation('.slide-toggle', ['$animateCss', function($animateCss) {
        return {
            addClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
                    var animator = $animateCss(element, {                    
                        to: {height: '0px', opacity: 0}
                    });
                    if (animator) {
                        return animator.start().finally(function() {
                            element[0].style.height = '';
                            doneFn();
                        });
                    }
                }
                doneFn();
            },
            removeClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
                    var height = element[0].offsetHeight;
                    var animator = $animateCss(element, {
                        from: {height: '0px', opacity: 0},
                        to: {height: height + 'px', opacity: 1}
                    });
                    if (animator) {
                     return animator.start().finally(doneFn);
                    }
                }
                doneFn();
            }
        };
    }]);
})();
