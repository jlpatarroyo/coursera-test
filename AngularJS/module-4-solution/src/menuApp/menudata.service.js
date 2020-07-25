(function(){
  'use strict',

  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseUrl', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'BaseUrl']
  function MenuDataService($http, BaseUrl){
    var service = this;

    service.getAllCategories = function(){
      return $http({
        method: "GET",
        url: (BaseUrl + "/categories.json")
      }).then(function(result){
        // console.log('getAllCategories: ',result);
        return result.data;
      });
    };

    service.getItemsForCategory =
      function(categoryShortName){
        var url = BaseUrl + "/menu_items.json?category=";
        return $http({
            method: "GET",
            url:
              (BaseUrl + "/menu_items.json?category=" + categoryShortName)
        }).then(function(result){
          // console.log(result.data);
            return result.data;
        });
    };
  }
})();
