(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$state', '$mdDialog'];

	function HomeController($state, $mdDialog) {
		var vm = this;
		var alert;


		vm.problemModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog  aria-label="What is a problem you think should be solved?"  ng-cloak><md-toolbar><div  class="md-toolbar-tools"><h1>What is a problem you think should be solved?</h1></div></md-toolbar><div><form ng-submit="vm.createProblem()"><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>TITLE OF PROBLEM</label><input type="text" ng-model="vm.problem.title"></md-input-container><md-input-container><label>DESCRIPTION</label><input type="text" ng-model="vm.problem.description"></md-input-container><md-input-container><label>FROM 1 to 10 HOW SERIOUS IS THIS PROBLEM?</label><input type="number" ng-model="vm.problem.level"></md-input-container></md-dialog-content><md-button class="md-raised" type="submit" >POST</md-button></form></div></md-dialog>',
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
				console.log("homectrl 2nd dialog func")
				alert = undefined;
			});
		}

		vm.solutionModal = function($event){
			var parentE1 = angular.element(document.querySelector('md-content'));

			alert = $mdDialog.alert({
				template: '<md-dialog aria-label="What is a solution you think would solve a problem?" ng-cloak><md-toolbar><div class="md-toolbar-tools"><h1>What is a solution you think would solve a problem?</h1></div></md-toolbar><div><form><md-dialog-content style="max-width:70%;max-height:90%;"><md-input-container><label>TITLE OF SOLUTION</label><input type="text" ng-model="vm.solution.title"></md-input-container><md-input-container><label>DESCRIPTION</label><input type="text" ng-model="vm.solution.description"></md-input-container><md-input-container><label>HOW HARD IS THIS SOLUTION TO IMPLEMENT?</label><md-select ng-model="vm.solution.description"><md-option>VERY HARD</md-option><md-option>KINDA HARD</md-option></md-select></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.createSolution()">POST</md-button></form></div></md-dialog>',
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
	console.log("homectrl 2nd dialog func")
	alert = undefined;
});
}
}
})();

