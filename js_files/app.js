"use strict";
var app = angular.module('ContactsApp', ["ngRoute", "firebase"])
    .constant("firebaseURL", "https://contacts-app-tdm.firebaseio.com/");

// THIS IS AUTH CODE FROM NG-DEMO VERBATIM
let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.config(function($routeProvider){
    $routeProvider.
        when("/", {
            templateUrl: "partials/item-list.html",
            controller: "ListCtrl",
            resolve: {isAuth}
        }).
        when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller: "ListCtrl",
            resolve: {isAuth}
        }).
        when("/items/new", {
            templateUrl: "partials/item-new.html",
            controller: "NewCtrl",
            resolve: {isAuth}
        }).
        when("/items/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ViewCtrl",
            resolve: {isAuth}
        }).
        when("/items/:itemId/edit", {
            templateUrl: "partials/item-new.html",
            controller: "EditCtrl",
            resolve: {isAuth}
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/logout", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        otherwise("/");
}); 

app.run(($location) => {
    let contactsRef = new Firebase("https://contacts-app-tdm.firebaseio.com/");
    contactsRef.onAuth(authData => {
        if(!authData){
            $location.path("/login");
        }
    });
});