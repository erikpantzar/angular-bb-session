
angular.module('invoiceApp') // no array dependancies, because they are already set in index
	.controller('invoiceListController', invoiceListController);

invoiceListController.$injector = ['Invoices']; // dependancies here

function invoiceListController (Invoices) {  // dependancies recieved as params

	var vm = this;
	vm.invoices = [];
	vm.invoiceActive = "";
	vm.setInvoiceActive = invoiceActive;
	vm.invoicesTotal = invoiceTotal;

	Invoices.list().then(resolveInvoices);

	// methods
	function resolveInvoices (response) {
	   vm.invoices = response.data.Invoices;

	   // add total to invoice
		for (var x = 0; x < vm.invoices.length; x++) {
			var invoice = vm.invoices[x];
			invoice.time = 0;

			// summarize time of tasks to invoice.time property
		   for (var i = 0; i < invoice.tasks.length; i++) {
			   	invoice.time += invoice.tasks[i].time;
		   }

		   invoice.total = invoice.time * invoice.rate;
	   }
	}

	// summarize invoice task hours plus total
	function invoiceTotal ( invoices ) {
		var total = 0;

		if (!invoices.length) {
			return;
		}

		for(var y = 0; y < invoices.length; y++) {
			total += invoices[y].total;
		}

		return total;
	}


	// Methods
	function invoiceActive (index) {
		vm.invoiceActive = vm.invoices[index];
	}
}
