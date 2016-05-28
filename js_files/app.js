"use strict";
var app = angular.module('ContactsApp', ["ngRoute"])
    .constant("firebaseURL", "https://contacts-app-tdm.firebaseio.com/");

app.config(function($routeProvider){
    $routeProvider.
        when("/items/list",{
            templateUrl: "partials/item-list.html",
            controller: "ListCtrl"
        }).
        when("/items/new", {
            templateUrl: "partials/item-new.html",
            controller: "NewCtrl"
        }).
        when("/items/details", {
            templateUrl: "partials/item-details.html",
            controller: "ViewCtrl"
        }).
        otherwise("/items/list");
})