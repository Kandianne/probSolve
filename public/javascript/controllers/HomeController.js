(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$state', '$mdDialog', 'HomeFactory'];

	function HomeController($state, $mdDialog, HomeFactory) {
		var vm = this;
		var alert;


		// vm.getProblems = function(){
		// 	HomeFactory.getProblems().then(function(){
		// 		console.log("got here!")
		// 	})
		// };
		// vm.getProblems();

		// if(useeee) {
		// 	HomeFactory.getUserLoggedIn($rootScope._user.id).then(function(res) {
		// 		vm.userLoggedIn = res;
		// 	})
		// } 
		// else {vm.getProblems()};	

		vm.problemModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog  aria-label="What is a problem you think should be solved?"  ng-cloak><md-toolbar><div  class="md-toolbar-tools"><h1>What is a problem you think should be solved?</h1></div></md-toolbar><div><form ng-submit="vm.createProblem()"><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>TITLE OF PROBLEM</label><input type="text" ng-model="vm.problem.title"></md-input-container><md-input-container><label>DESCRIPTION</label><input type="text" ng-model="vm.problem.description"></md-input-container><md-input-container><label>FROM 1 to 10 HOW SERIOUS IS THIS PROBLEM?</label><input type="number" ng-model="vm.problem.level"></md-input-container></div><md-input-container><label>WHAT CATEGORY DOES YOUR PROBLEM FIT INTO?</label><md-select ng-model="vm.problem.category"><md-option>BUSINESS</md-option><md-option>EDUCATIONAL</md-option><md-option>EMOTIONAL</md-option><md-option>FINANCIAL</md-option><md-option>SOCIAL</md-option><md-option>TECHNOLOGICAL</md-option></md-select></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.createProblem()">POST</md-button></md-dialog>',
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
		template: '<md-dialog aria-label="What is a solution you think would solve a problem?" ng-cloak><md-toolbar><div class="md-toolbar-tools"><h1>What is a solution you think would solve a problem?</h1></div></md-toolbar><div><form><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>TITLE OF SOLUTION</label><input type="text" ng-model="vm.solution.title"></md-input-container><md-input-container><label>DESCRIPTION</label><input type="text" ng-model="vm.solution.description"></md-input-container><md-input-container><label>HOW HARD IS THIS SOLUTION TO IMPLEMENT?</label><md-select ng-model="vm.solution.level"><md-option>VERY HARD</md-option><md-option>KINDA HARD</md-option></md-select></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.createSolution()">POST</md-button></form></div></md-dialog>',
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