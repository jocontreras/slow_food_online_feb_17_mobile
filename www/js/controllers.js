angular.module('starter.controllers', [])

.controller('HomeController', function($scope, Restaurant) {
  Restaurant.query(function(response) {
    console.log(response);
    $scope.restaurants = response.entries;
  });
});
