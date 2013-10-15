angular.module('todos', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoListController',
      templateUrl: 'todo-list/todo-list.html'
    });
  }])
  .constant('TODOS_PATH', 'temp/todos.json');
