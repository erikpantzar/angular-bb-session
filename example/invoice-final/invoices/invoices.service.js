
angular.module('invoiceApp') // no array dependancies, because they are already set in index
	.factory('Invoices', Invoices);

Invoices.$injector = ['$http']; // dependancies here

function Invoices ($http) {
	return {
		list: list
	};

	function list () {
		return $http.get('./invoices/invoices.json');
	}
}
