(function() {
	'use strict';
	angular.module('app')
	.factory('ProblemFactory', ProblemFactory);

	ProblemFactory.$inject = ['$http', '$q'];

	function ProblemFactory($http, $q) {
		var p = {};
		var vm = this;
		
		p.postProblem = function(probObj){
			console.log(probObj);
			var q = $q.defer();
			$http.post("api/problems", probObj).success(function(){
				q.resolve();
			})
		}

		return p;
	}
})();