(function(){
  'use strict';
  angular.module('lunchApp',[])
  .controller('lunchController', lunchController);

  function lunchController($scope){
    $scope.items = "";
    $scope.message = "";

    $scope.checkNumberOfItems = function(){
      //Check number of items
      var elem1 = document.getElementById('message');
      var elem2 = document.getElementById('lunch-menu');
      if($scope.items === ""){
        $scope.message = "Please enter data first!";
        elem1.style.color = "red";
        elem2.style.borderColor = "red";
      }else{
        var arr = $scope.items.split(',');
        elem1.style.color = "green";
        elem2.style.borderColor = "green";
        if(arr.length < 4){
          $scope.message = "Enjoy it!";
        }else{
          $scope.message = "Too much!";
        }
      }
    };
  }
})();
