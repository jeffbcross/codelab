angular.module('todos')
  .factory('Todo', ['$resource', function ($resource) {
    return $resource('temp/todos.json/:id');
  }]);
