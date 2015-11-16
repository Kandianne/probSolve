(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$state', '$mdDialog'];

	function HomeController($state, $mdDialog) {
		var vm = this;
		var alert;

		console.log('12 homecontrol');

		vm.problemModal = function($event){

			var parentE1 = angular.element(document.querySelector('md-content'));

			console.log('18 homecontrol');
			alert = $mdDialog.alert({
				template: '<md-dialog aria-label="What is a problem you think should be solved?"  ng-cloak><div layout layout-sm="column"><form><md-dialog-content style="max-width:800px;max-height:810px; "><md-input-container><label>Title of Problem</label><input type="text" ng-model="problem.title"></md-input-container><md-input-container><label>Description</label><input type="text" ng-model="problem.description"></md-input-container><md-input-container><label>How serious is this problem on a scale of 1 - 10?</label><input type="number" ng-model="problem.title"></md-input-container></md-dialog-content><md-button class="md-raised" ng-click="vm.createProblem()">content</md-button></form></div></md-dialog>',
				parent: parentE1,
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					items: vm.items,
					closeDialog: vm.closeDialog
				},
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

		function showDialog($event) {
			var parentEl = angular.element(document.querySelector('md-content'));
			alert = $mdDialog.alert({
				parent: parentEl,
				targetEvent: $event,
				template:
				'<md-dialog aria-label="Sample Dialog">' +
				'  <md-content>'+
				'    <md-list>'+
				'      <md-item ng-repeat="item in ctrl.items">'+
				'       <p>{{item}}</p>' +
				'      </md-item>'+
				'    </md-list>'+
				'  </md-content>' +
				'  <div class="md-actions">' +
				'    <md-button ng-click="ctrl.closeDialog()">' +
				'      Close Greeting' +
				'    </md-button>' +
				'  </div>' +
				'</md-dialog>',
				locals: {
					items: $scope.items,
					closeDialog: $scope.closeDialog
				},
				bindToController: true,
				controllerAs: 'ctrl',
				controller: 'DialogController'
			});
			$mdDialog
			.show( alert )
			.finally(function() {
				alert = undefined;
			});
		}

	}
})();