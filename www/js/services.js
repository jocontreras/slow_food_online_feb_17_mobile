angular.module('starter.services', [])

  .factory('SlowFood', function () {
    var fakeData = [{
        name: 'Amber Restaurant',
        type: 'Malaysian',
        location: 'Holtermansgatan 1'
      }];

    return {
      query: function () {
        return fakeData;
      }
    };




  });
