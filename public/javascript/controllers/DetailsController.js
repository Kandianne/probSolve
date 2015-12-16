(function() {
	'use strict';
	angular.module('app')
	.controller('DetailsController', DetailsController);

	DetailsController.$inject = ['$state','ProblemFactory', 'SolutionFactory'];

	function DetailsController($state, ProblemFactory, SolutionFactory) {
		var vm = this;


		//=====================GETTING specific OBJECTS================================	

		vm.getThisProb = function(probId){
			ProblemFactory.getThisProblem(probId).then(function(res){
				vm.problemDetail = res;
				console.log(vm.problemDetail);
				$state.go('ProblemDetail');
			})
		};

		vm.getThisSolution = function(probId){
			SolutionFactory.getThisSolution(probId).then(function(res){
				vm.solutionDetail = res;
				console.log(res);
				console.log(vm.solutionDetail);
				$state.go('SolutionDetail');
			})
		};
		
	}
})();