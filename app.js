angular.module('todos', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoListController',
      templateUrl: 'templates/todo-list.html'
    });
  });
