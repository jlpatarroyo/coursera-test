(function(){
  'use strict',

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService','$stateParams', 'categories'];
  function ItemsController(MenuDataService, $stateParams, categories){
    var controller = this;
    controller.category = categories[$stateParams.categoryId];
    // console.log(category);
     var categoryShortName = controller.category["short_name"];
    controller.items = [];
    MenuDataService.getItemsForCategory(categoryShortName)
    .then(function(result){
      // console.log(result);
        controller.items = result["menu_items"];
    });
  }

})();
