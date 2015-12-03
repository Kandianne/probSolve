(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	GlobalController.$inject = ["$state", "$mdDialog", "UserFactory", "$rootScope"];

	function GlobalController($state, $mdDialog, UserFactory, $rootScope) {
		var vm = this;
		var alert;
		

		//=============================GETTING LOGGEDIN USER=================================
		if($rootScope._user) {
			UserFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
				console.log(res);
				vm.userLoggedIn = res;
			});
		};	
		
		//=============================USER REGISTRATION AND LOGIN=========================
		
		vm.registerModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog aria-label="Create a profile" ng-cloak><md-toolbar><div class="md-toolbar-tools"><h1>Create your account below</h1></div></md-toolbar><div><form><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>FIRST AND LAST NAME</label><input type="text" ng-model="vm.user.name"></md-input-container><md-input-container><label>EMAIL</label><input type="text" ng-model="vm.user.email"></md-input-container><md-input-container><label>PASSWORD</label><input type="password" ng-model="vm.user.password"></md-input-container><md-input-container><label>CONFIRM PASSWORD</label><input type="password"></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.finishRegister()">FINISH</md-button></form></div></md-dialog>',
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

		vm.anonymousRegisterModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog aria-label="Create anonymous account below" ng-cloak><md-toolbar><div class="md-toolbar-tools"><h1>Create anonymous account below<br> (Your info will not be shown to other users)</h1></div></md-toolbar><div><form><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>EMAIL</label><input type="text" ng-model="vm.anonUser.email"></md-input-container><md-input-container><label>PASSWORD</label><input type="text" ng-model="vm.anonUser.password"></md-input-container><md-input-container><label>CONFIRM PASSWORD</label><input type="text"></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.finishAnonRegister()">FINISH</md-button></form></div></md-dialog>',
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

		vm.loginModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog aria-label="Please login" ng-cloak><md-toolbar><div class="md-toolbar-tools"><h1>Please login</h1></div></md-toolbar><div><form><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>EMAIL</label><input type="text" ng-model="vm.userLoggedin.email"></md-input-container><md-input-container><label>PASSWORD</label><input type="password" ng-model="vm.userLoggedin.password"></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.login()">FINISH</md-button></form></div></md-dialog>',
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