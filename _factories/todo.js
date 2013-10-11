angular.module('todos')
  .factory('Todo', function ($resource) {
    return $resource('temp/todos.json');
  });
