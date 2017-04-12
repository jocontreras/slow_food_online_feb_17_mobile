angular.module('starter.controllers', [])

.controller('HomeController', function($scope, $state, Restaurant) {
  Restaurant.query(function(response) {
    console.log(response);
    $scope.restaurants = response.entries;
  });

  $scope.navigateToRestaurant = function(id){
    $state.go('tab.restaurant', {id: id})
  }
})

.controller('RestaurantController', function($scope, $stateParams, Restaurant){
  $scope.restaurant = Restaurant.get({id: $stateParams.id})
  console.log($scope.restaurant)
});
