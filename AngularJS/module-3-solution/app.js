(function(){
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo ={
    templateUrl: 'foundItems.html',
    scope: {
      menuItems: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true,
    link: FoundItemsDirectiveLink
  };

  return ddo;
}

function FoundItemsDirectiveLink(scope, element, attrs, controller){
  function removeItem(index){
    controller.removeItem(index);
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.menuItems = [];
  ctrl.searchTerm = "";

  ctrl.getMatchedMenuItems = function(searchTerm){
    console.log(searchTerm);
    MenuSearchService.getMatchedMenuItems(searchTerm).then(function(response){
      ctrl.menuItems = response;
    });
  };

  ctrl.removeItem = function(index){
    ctrl.menuItems.splice(index.index, 1);
  };
}

MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function(result){
      var foundItems = result.data.menu_items;
      for (var i = 0; i < foundItems.length; i++) {
        if (foundItems[i].name.indexOf(searchTerm) === -1) {
          foundItems.splice(i);
        }else{
          // console.log(foundItems[i].name);
        }
      }
      return foundItems;
    });
  };
}


})();
