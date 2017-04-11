angular.module('starter.controllers', [])

.controller('HomeController',  function($scope, SlowFood) {
  $scope.restaurants = SlowFood.query();
  //console.log($scope.restaurants)
});
