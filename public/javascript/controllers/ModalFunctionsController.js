(function() {
	'use strict';
	angular.module('app')
	.controller('ModalFunctionsController', ModalFunctionsController);

	ModalFunctionsController.$inject = ["$state", "$mdDialog"];

	function ModalFunctionsController($state, $mdDialog) {
		var vm = this;
		vm.title = 'Your Profile';
		vm.prob = {};

		vm.createProblem = function() {
			$mdDialog.hide();
		};

	}
})();