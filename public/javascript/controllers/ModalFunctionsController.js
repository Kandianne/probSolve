(function() {
	'use strict';
	angular.module('app')
	.controller('ModalFunctionsController', ModalFunctionsController);

	ModalFunctionsController.$inject = ["$state", "$mdDialog", "ProblemFactory", "SolutionFactory", "UserFactory", "$rootScope"];

	function ModalFunctionsController($state, $mdDialog, ProblemFactory, SolutionFactory, UserFactory, $rootScope) {
		var vm = this;
		vm.user = {};
		// vm.problem = {};
		// vm.solution = {};
		// vm.anonUser = {};



		if($rootScope._user) {
			UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
				console.log($rootScope._user)
				vm.userLoggedIn = res;
			});
		};

		// vm.getAllUserInfo();
		// vm.getAllUserInfo = function() {
		// 	UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
		// 		console.log($rootScope._user)
		// 		vm.userLoggedIn = res;
		// 	});
		// }

		vm.createProblem = function() {
			$mdDialog.hide();
			console.log($rootScope._user.id)
			vm.problem.postedBy = $rootScope._user.id;
			ProblemFactory.postProblem(vm.problem)
		};

		vm.createSolution = function() {
			$mdDialog.hide();
			console.log($rootScope._user.id)
			vm.solution.postedBy = $rootScope._user.id;
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

		// vm.userLoggedIn = $rootScope._user;
		vm.login = function() {
			$mdDialog.hide();
			UserFactory.login(vm.userLoggedin).then(function(){
				vm.userLoggedIn = $rootScope._user;
				console.log(vm.userLoggedIn, "58 of modal controller")
				$state.go('Profile');
			})
		};

		

	}
})();