'use strict';

angular.module('jmovies',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Movies',{templateUrl:'views/Movie/search.html',controller:'SearchMovieController'})
      .when('/Movies/new',{templateUrl:'views/Movie/detail.html',controller:'NewMovieController'})
      .when('/Movies/edit/:MovieId',{templateUrl:'views/Movie/detail.html',controller:'EditMovieController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
