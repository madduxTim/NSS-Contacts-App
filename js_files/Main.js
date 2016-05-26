"use strict";
var Appy = angular.module("ContactsApp", []);

// THIS IS FOR SPLITTING UP THE HTML INTO SEPERATE FILES. DO LAST. 

// app.config(function($routeProvider){
//     $routeProvider.
//         when("/items/list",{
//             templateUrl: "partials/item-list.html",
//             controller: "ItemListCtrl"
//         }).
//         when("/items/new", {
//             templateUrl: "partials/item-new.html",
//             controller: "ItemNewCtrl"
//         }).
//         when("/items/details", {
//             templateUrl: "partials/item-details.html",
//             controller: "ItemViewCtrl"
//         }).
//         otherwise("/items/list");
// });