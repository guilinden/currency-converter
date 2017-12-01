(function(){
	angular
	    .module('app')
	    .service('search', search);

	function search($http){

		var vm = this;

		vm.getList = getList;

		function getList(){
			return $http({
	  			method: 'GET',
	  			url: 'https://api.fixer.io/latest'
			});
	  	}
	}
})();
