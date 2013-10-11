angular.module('todos', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoListController',
      templateUrl: 'templates/todo-list.html'
    });
  }])
  .constant('TODOS_PATH', 'temp/todos.json');
