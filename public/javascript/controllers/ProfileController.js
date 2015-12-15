(function(){
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);

	function ProfileController(UserFactory, $state, $rootScope){
		var vm = this;
		
		if($rootScope._user) {
			UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
				console.log($rootScope._user)
				console.log(vm.userLoggedIn)
				vm.userLoggedIn = res;
			});
		};

		vm.logout = function() {
			UserFactory.logout().then(function(){
				vm.userLoggedIn = $rootScope._user;
				vm.user = "";
				$state.go("Home");
			})
		};
	}
})();