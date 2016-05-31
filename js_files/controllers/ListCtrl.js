"use strict";
app.controller("ListCtrl", function($scope, itemStorage){
    $scope.items = [];

    itemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
    });

    $scope.itemDelete = function(itemId){
        itemStorage.deleteItem(itemId).then(function(response){
            itemStorage.getItemList().then(function(itemCollection){
                $scope.items = itemCollection;
            });
        });
    };

    $scope.inputChange = function(item){
        itemStorage.updateCompletedStatus(item)
            .then(function(response){
        });
    };
});