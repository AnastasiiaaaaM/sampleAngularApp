angular.module("favorites").config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
            url: "",
            templateUrl: "partials/favoritesList.html",
            controller: "mainController"
        })
        .state('about', {
            url:"/about", templateUrl: "partials/about.html"
        })

});