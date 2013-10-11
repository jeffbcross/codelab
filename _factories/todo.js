angular.module('todos')
  .factory('Todo', ['$resource', function ($resource) {
    return $resource('temp/todos.json', null, {
        update: {
          url: 'temp/todos.json/:id',
          method: 'PUT'
        }});
  }]);
