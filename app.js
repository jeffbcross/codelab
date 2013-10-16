angular.module('todos', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoListController',
      templateUrl: 'todo_list/todo-list.html'
    })
    .when('/todo/:id', {
      controller: 'TodoDetailController',
      templateUrl: 'todo_detail/todo-detail.html'
    });
  }])
  .constant('TODOS_PATH', '/todos')
  .constant('COMMENTS_PATH', '/comments');
