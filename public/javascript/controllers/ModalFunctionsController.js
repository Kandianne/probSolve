(function() {
	'use strict';
	angular.module('app')
	.controller('ModalFunctionsController', ModalFunctionsController);

	ModalFunctionsController.$inject = ["$state", "$mdDialog", "ProblemFactory", "SolutionFactory", "UserFactory"];

	function ModalFunctionsController($state, $mdDialog, ProblemFactory, SolutionFactory, UserFactory) {
		var vm = this;
		vm.problem = {};
		vm.solution = {};
		vm.user = {};
		vm.anonUser = {};
		

		vm.createProblem = function() {
			$mdDialog.hide();
			ProblemFactory.postProblem(vm.problem)
		};

		vm.createSolution = function() {
			console.log(vm.solution);
			$mdDialog.hide();
			SolutionFactory.postSolution(vm.solution)
		};

		vm.finishRegister = function() {
			console.log(vm.user)
			$mdDialog.hide();
			UserFactory.register(vm.user)
		};

		vm.finishAnonRegister = function() {
			console.log(vm.anonUser);
			$mdDialog.hide();
			UserFactory.registerAnon(vm.anonUser).then(function(){
			})
		};

	}
})();