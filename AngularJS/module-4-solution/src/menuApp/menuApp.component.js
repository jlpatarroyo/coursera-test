(function(){
  'use strict',

  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'src/menuApp/templates/categories.html',
    bindings:{
      categories: '<'
    }
  })
})();
