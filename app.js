angular.module('todoApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/todos', {
      controller: 'TodoListController',
      templateUrl: 'terms/todo-list.html',
      controllerAs: 'todoList'
    })
    .when('/todos/:id', {
      controller: 'TodoDetailController',
      templateUrl: 'terms/detail/todo-detail.html',
      controllerAs: 'todoDetail'
    })
    .otherwise({
      redirectTo: '/todos'
    })
  }])
  .constant('TODOS_PATH', '/todos')
  .constant('COMMENTS_PATH', '/comments');
