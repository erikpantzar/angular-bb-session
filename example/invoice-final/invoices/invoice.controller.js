
angular.module('invoiceApp') // no array dependancies, because they are already set in index
	.controller('invoiceController', invoiceController);

invoiceController.$injector = ['Invoices']; // dependancies here

function invoiceController (Invoices) {  // dependancies recieved as params

	var vm = this;
	vm.add = add;
	vm.remove = remove;
	vm.newTask = {};


	// methods
	function add (task, invoice) {
		invoice.tasks.push(task);
		vm.newTask = {};
	}

	function remove (taskIndex, invoiceTasks) {
		console.log(taskIndex, invoiceTasks);
		invoiceTasks.splice(taskIndex, 1);
	}
}
