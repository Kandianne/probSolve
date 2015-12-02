(function() {
	'use strict';
	angular.module('app')
	.controller('ModalFunctionsController', ModalFunctionsController);

	ModalFunctionsController.$inject = ["$state", "$mdDialog", "ProblemFactory", "SolutionFactory", "UserFactory", "$rootScope"];

	function ModalFunctionsController($state, $mdDialog, ProblemFactory, SolutionFactory, UserFactory, $rootScope) {
		var vm = this;
		// vm.problem = {};
		// vm.solution = {};
		// vm.user = {};
		// vm.anonUser = {};

		// vm.userLoggedIn = $rootScope._user;

		if($rootScope._user) {
			UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
				console.log($rootScope._user)
				vm.userLoggedIn = res;
			});
		};

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
				vm.userLoggedIn = $rootScope._user;
			})
		};

	}
})();