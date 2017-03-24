(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = '';
    $scope.userMessage = '';
    $scope.msgColor = 'red';

    $scope.checkItems = function(){
      var result = parseItemsString($scope.items);
      $scope.userMessage = result.msg;
      $scope.msgColor = result.color;
    };

    function parseItemsString(stringOfItems){
      var result = {msg: '', color: ''};
      var itemsArray = stringOfItems.split(',');

      // transforming all only-white-space strings into empty strings
      // e.g. '   ' into ''
      itemsArray = itemsArray.map(function(item){ return item.trim(); })

      // eliminating all empty strings
      itemsArray = itemsArray.filter(function(item){ return item != ''; });

      var len = itemsArray.length;

      if(len == 0) {
        result.msg = 'Please enter data first';
        result.color = 'red';
      }
      else if(len > 0 && len <= 3){
        result.msg = 'Enjoy!';
        result.color = 'green'
      }
      else if(len > 3){
        result.msg = 'Too much!';
        result.color = 'green'
      }

      return result;
    };

  };
})();
