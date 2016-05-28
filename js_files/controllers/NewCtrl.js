"use strict";
app.controller("NewCtrl", function($scope, $location, itemStorage){
    $scope.title = "New Item";
    $scope.submitButtonText = "Add New Item";
    $scope.newContact = {
        name: "",
        organization:"",
        title: "",
        email: "",
        phone: "",
        address:"",
    };
      
    $scope.addNewContact = function(){
        itemStorage.postNewItem($scope.newContact)
            .then(function successCallback(response) {
                $location.url("/items/list");
            });
    };
});