angular.module('starter.services', [])

.factory('Restaurant', function ($resource, API_URL) {
  return $resource(API_URL + '/restaurants', {}, {
    query: {
      method: 'GET',
      isArray: false}
  });
});
