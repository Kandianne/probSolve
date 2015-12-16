(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$state', '$mdDialog', 'HomeFactory', 'ProblemFactory', 'SolutionFactory'];

	function HomeController($state, $mdDialog, HomeFactory, ProblemFactory, SolutionFactory) {
		var vm = this;
		var alert;


		//=====================GETTING OBJECTS================================	
		(vm.getSolutions = function(){
			SolutionFactory.getSolutions().then(function(res){
				vm.solutions = res;
			})
		})();

		(vm.getProblems = function(){
			ProblemFactory.getProblems().then(function(res){
				vm.problems = res;
			})
		})();

		
		vm.problemModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				templateUrl: '/views/writeProb.html',
				parent: parentE1,
				targetEvent: $event,
				clickOutsideToClose:true,
				bindToController: true,
				controllerAs: 'vm',
				controller: 'ModalFunctionsController'
			});
			$mdDialog.show( alert )
			.finally(function() {
				alert = undefined;
			});
		}

		vm.solutionModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				templateUrl: '/views/writeSol.html',
				parent: parentE1,
				targetEvent: $event,
				clickOutsideToClose:true,
				bindToController: true,
				controllerAs: 'vm',
				controller: 'ModalFunctionsController'
			});
			$mdDialog
			.show( alert )
			.finally(function() {
				alert = undefined;
			});
		}
	}
})();