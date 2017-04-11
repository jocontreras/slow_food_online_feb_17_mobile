angular.module('starter.controllers', [])

.controller('HomeController',  function($scope, SlowFood) {
  SlowFood.query().function(response)(
    $scope.restaurants = response
  );
});
