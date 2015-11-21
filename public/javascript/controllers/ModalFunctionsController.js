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
		vm.userLoggedin = {};
		

		vm.createProblem = function() {
			$mdDialog.hide();
			ProblemFactory.postProblem(vm.problem)
		};

		vm.createSolution = function() {
			$mdDialog.hide();
			SolutionFactory.postSolution(vm.solution)
		};

		vm.finishRegister = function() {
			$mdDialog.hide();
			UserFactory.register(vm.user)
		};

		vm.finishAnonRegister = function() {
			$mdDialog.hide();
			UserFactory.registerAnon(vm.anonUser).then(function(){
			})
		};

		vm.login = function() {
			$mdDialog.hide();
			UserFactory.login(vm.userLoggedin).then(function(){
			})
		};

	}
})();