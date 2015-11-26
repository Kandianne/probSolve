(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var ps = {};

		//================PS IS FOR PROBLEMS AND SOLUTIONS=========================

		
		return ps;
	}
})();