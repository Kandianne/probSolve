(function() {
	'use strict';
	angular.module('app')
	.factory('SolutionFactory', SolutionFactory);

	SolutionFactory.$inject = ['$http', '$q'];

	function SolutionFactory($http, $q) {
		var p = {};
		var vm = this;
		
		p.postSolution = function(solObj){
			console.log(solObj);
			var q = $q.defer();
			$http.post("api/solution/", solObj).success(function(){
				q.resolve(res);
			})
		}
		return p;
	}
})();