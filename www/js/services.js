angular.module('starter.services', [])

  .factory('SlowFood', function ($resource) {
    return {
      query: function () {
        return fakeData;
      }
    }
  });


var fakeData = {
  restaurants: {
    name: 'Amber Restaurant',
    type: 'Malaysian',
    location: 'Holtermansgatan 1'
  }
};
