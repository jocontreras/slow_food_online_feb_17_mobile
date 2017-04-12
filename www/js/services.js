angular.module('starter.services', [])

.factory('Restaurant', function ($resource, API_URL) {
  return $resource(API_URL + '/restaurants/:id', {}, {
    query: {
      method: 'GET',
      isArray: false},
    get: {
      method: 'GET'
    }
  });
});
