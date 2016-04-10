angular
  .module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl() {
  var vm = this;

  vm.items = [
    {name: 'Mjöl', quantity: '3dl'},
    {name: 'Grädde', quantity: '2dl'},
    {name: 'Ägg', quantity: '4st'},
    {name: 'Daim', quantity: '3st'}
  ];
}