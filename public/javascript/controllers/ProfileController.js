(function(){
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);

	function ProfileController(UserFactory, $state, $rootScope){
		var vm = this;
		
		if($rootScope._user.id) {
			UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
				vm.userLoggedIn = res;
			});
		};

		
	}
})();