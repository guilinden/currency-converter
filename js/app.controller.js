(function(){
	angular
	    .module('app')
	    .controller('appController', appController);

	function appController(search,$log){
		var vm = this;

		vm.calculate = calculate;

		search.getList()
			.then(function successCallback(response) {
    			vm.list = response;
    			$log.log(vm.list);
  			}, function errorCallback(response) {
	   			$log.error("Unable to fetch currency data");
  			});

		//amount * currencyFrom value / currencyTo value

		function calculate(){
			vm.convertedValue = vm.money / vm.list.data.rates[vm.currencyFrom] * vm.list.data.rates[vm.currencyTo];
			vm.convertedValue = vm.convertedValue.toFixed(2);
			vm.hasValue = true;		
		}

	}
})();