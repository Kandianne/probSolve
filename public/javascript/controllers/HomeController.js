(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$state', '$modal'];

	function HomeController($state, $modal) {
		var vm = this;

		vm.problemModal = function(){

		};

		vm.solutionModal = function(){

		};
	}
})();