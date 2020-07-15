(function(){

angular.module('app',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.addBoughItem(itemIndex);
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    // console.log(ShoppingListCheckOffService.getToBuyItems());
    // console.log(ShoppingListCheckOffService.getBoughtItems());
  };

  toBuy.isEmpty = function() {
    if(toBuy.items.length == 0){
      return true;
    }else{
      return false;
    }
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
  bought.getItems = function(){
    return bought.items;
  };

  bought.isEmpty = function() {
    if(bought.items.length == 0){
      return true;
    }else{
      return false;
    }
  };
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = ["10 cookies", "5 bags of candies", "4 candles", "2 peppers"
                    , "10 peanuts"];
  var boughtItems = [];

  service.addToBuyItem = function(item){
    toBuyItems.push(item);
  };

  service.addBoughItem = function(itemIndex){
    var item = toBuyItems[itemIndex];
    // console.log(item);
    toBuyItems.splice(itemIndex,1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function(){
    return toBuyItems;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };
}

})();
