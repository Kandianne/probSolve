(function() {
	'use strict';
	angular.module('app')
	.controller('ModalFunctionsController', ModalFunctionsController);

	ModalFunctionsController.$inject = ["$state", "$mdDialog", "ProblemFactory", "SolutionFactory"];

	function ModalFunctionsController($state, $mdDialog, ProblemFactory, SolutionFactory) {
		var vm = this;
		vm.problem = {};

		vm.createProblem = function() {
			$mdDialog.hide();
			ProblemFactory.postProblem(vm.problem).then(function(){
			})
		};

		vm.createSolution = function() {
			console.log(vm.solution);
			$mdDialog.hide();
			SolutionFactory.postSolution(vm.solution).then(function(){
			})
		};

	}
})();