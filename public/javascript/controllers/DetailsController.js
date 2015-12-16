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
		
	}
})();