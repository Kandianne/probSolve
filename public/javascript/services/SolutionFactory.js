(function() {
	'use strict';
	angular.module('app')
	.factory('SolutionFactory', SolutionFactory);

	SolutionFactory.$inject = ['$http', '$q'];

	function SolutionFactory($http, $q) {
		var s = {};
		var vm = this;
		
		s.postSolution = function(solObj){
			console.log(solObj);
			var q = $q.defer();
			$http.post("api/solutions/", solObj).success(function(){
				q.resolve();
			})
		}
		return s;
	}
})();