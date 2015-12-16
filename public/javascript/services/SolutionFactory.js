(function() {
	'use strict';
	angular.module('app')
	.factory('SolutionFactory', SolutionFactory);

	SolutionFactory.$inject = ['$http', '$q'];

	function SolutionFactory($http, $q) {
		var s = {};
		var vm = this;
		
		s.postSolution = function(solObj){
			var q = $q.defer();
			$http.post("api/solutions/", solObj).success(function(){
				q.resolve();
			})
		}

		s.getSolutions = function(){
			var q = $q.defer();
			$http.get("api/solutions/").success(function(res){

				q.resolve(res);
			})
			return q.promise;
		}

		s.getThisSolution = function(solId){
				console.log(solId);

			var q = $q.defer();
			$http.get("api/solutions/solutionDetails/" + solId).success(function(res){
				q.resolve(res);
				console.log(res)
				vm.theSolution = res;
			})
			return q.promise;
		}
		
		return s;
	}
})();