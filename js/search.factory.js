(function(){
	angular
	    .module('app')
	    .factory('search', search);

	function search($http){

		var list = {
			getList: getList
		}

		return list;

		function getList(){
			return $http({
	  			method: 'GET',
	  			url: 'https://api.fixer.io/latest'
			});
	  	}
	}
})();
