(function() {
	'use strict';
	angular.module('app')
	.factory('ProblemFactory', ProblemFactory);

	ProblemFactory.$inject = ['$http', '$q'];

	function ProblemFactory($http, $q) {
		var p = {};
		var vm = this;
		
		p.postProblem = function(probObj){
			var q = $q.defer();
			$http.post("api/problems", probObj).success(function(){
				q.resolve();
			});
		};

		p.getProblems = function(){
			var q = $q.defer();
			$http.get("api/problems").success(function(res){
				q.resolve(res);
			});
			return q.promise;
		};

		p.getThisProblem = function(probId){
			console.log(probId)
			var q = $q.defer();
			$http.get("api/problems/probDetails/" + probId).success(function(res){
				q.resolve(res);
				vm.specificProblem = res;
			});
			return q.promise;
		};


		return p;
	}
})();