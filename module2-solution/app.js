(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  buyList.putItemToBought = function (itemIndex) {
      ShoppingListCheckOffService.putItemToBought(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.itemsBought = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy
  var itemsToBuy = [
    {name: 'Pepsi', quantity: 10},
    {name: 'Cookies', quantity: 3},
    {name: 'Mivina', quantity: 5},
    {name: 'Bread', quantity: 23},
    {name: 'Milk', quantity: 8}
  ];

  // List of shopping items already bought
  var itemsBought = [];

  service.putItemToBought = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}

})();
