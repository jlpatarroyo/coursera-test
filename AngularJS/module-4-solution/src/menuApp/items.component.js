(function(){
  'use strict',

  angular.module('MenuApp')
  .component('items',{
    templateUrl: 'src/menuApp/templates/items.html',
    bindings:{
      items: '<'
    }
  })
})();
