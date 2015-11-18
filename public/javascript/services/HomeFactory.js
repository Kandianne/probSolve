(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var ps = {};

		ps.getProblems = function(){
			var q = $q.defer();
			$http.get('api/problems/').success(function(res){
				console.log(hf);
				vm.problems = res;
			})
		}

		
		return ps;
	}
})();