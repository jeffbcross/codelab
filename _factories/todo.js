angular.module('todos')
  .factory('Todo', ['$resource', 'TODOS_PATH', function ($resource, TODOS_PATH) {
    return $resource(TODOS_PATH, null, {
      update: {
        url: TODOS_PATH + '/:id',
        method: 'PUT'
      }});
  }]);
