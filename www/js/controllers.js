angular.module('starter.controllers', [])

.controller('HomeController',  function($scope, Restaurant) {
  $scope.restaurants = Restaurant.query();
});
