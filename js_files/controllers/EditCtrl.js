"use strict";

app.controller("EditCtrl", function($scope, $location, $routeParams, itemStorage){
    $scope.title = "Edit Item";
    $scope.submitButtonText = "Update";
    $scope.newContact = {};
      
    itemStorage.getSingleItem($routeParams.itemId)
        .then(function successCallback(response){
            $scope.newContact = response;
        });
    $scope.addNewContact = function(){
        itemStorage.updateItem($routeParams.itemId, $scope.newContact)
            .then(function successCallback(response) {
                $location.url("/items/list");
            });
    };
});