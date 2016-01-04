(function() {
	'use strict';
	angular.module('app')
	.controller('DetailsController', DetailsController);

	DetailsController.$inject = ['$state', '$stateParams','ProblemFactory', 'SolutionFactory'];

	function DetailsController($state, $stateParams, ProblemFactory, SolutionFactory) {
		var vm = this;


		//=====================GETTING specific OBJECTS================================	
		if($stateParams.probId){
		console.log($stateParams.probId);
			ProblemFactory.getThisProblem($stateParams.probId).then(function(res){
				vm.problemDetail = res;
				console.log(vm.problemDetail);
				$state.go('ProblemDetail');
			});
		} else {
			console.log('no stateparams!')
		}	
			

		if($stateParams.solId){
			console.log($stateParams.solId)
			SolutionFactory.getThisSolution($stateParams.solId).then(function(res){
				vm.solutionDetail = res;
				console.log(res);
				console.log(vm.solutionDetail);
				$state.go('SolutionDetail');
			});
		} else {
			console.log('theres no stateparams yo!')
		}
		
		
		
	}
})();