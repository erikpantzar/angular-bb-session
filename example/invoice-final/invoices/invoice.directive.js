angular.module('invoiceApp')
	.directive('invoice', invoiceDirective);



function invoiceDirective () {
	return {
		restrict: "AE", // Attribute or ELement
		link: function () {},
		controller: "invoiceController",
		controllerAs: "invoiceVm",
		scope: {
			item: "="
		},
		templateUrl: "./invoices/invoice.html"
	};
}
