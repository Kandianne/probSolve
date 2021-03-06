(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController)

	HomeController.$inject = ['$state', '$stateParams', '$mdDialog', '$scope', 'HomeFactory', 'ProblemFactory', 'SolutionFactory'];

	function HomeController($state, $stateParams, $mdDialog, $scope, HomeFactory, ProblemFactory, SolutionFactory) {
		var vm = this;
		var alert;


		//=====================GETTING OBJECTS================================	
		(vm.getSolutions = function(){
			SolutionFactory.getSolutions().then(function(res){
				vm.solutions = res;
				console.log(vm.solutions);
			})
		})();

		(vm.getProblems = function(probId){
			ProblemFactory.getProblems().then(function(res){
				console.log(res);
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

		
		//==================EDIT AND DELETE TOGGLE======================
		$(".options").click(function(){
			$(".updateDelete").slideToggle("slow")
		})

	}
})();
	
	
