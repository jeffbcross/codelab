angular.module('todos', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/todos', {
      controller: 'TodoListController',
      templateUrl: 'todo_list/todo-list.html',
      controllerAs: 'todoList'
    })
    .when('/todos/:id', {
      controller: 'TodoDetailController',
      templateUrl: 'todo_detail/todo-detail.html',
      controllerAs: 'todoDetail'
    })
    .otherwise({
      redirectTo: '/todos'
    })
  }])
  .constant('TODOS_PATH', '/todos')
  .constant('COMMENTS_PATH', '/comments');


/**

codelab/
  components/
  ...
  todo_detail/
  todo_list/
  app.js
  ...


codelab/
  components/
  views/
    todo/
      todo.html
      todo-controller.js
      todo-controller.spec.js
      detail/
        todo-detail.css
        todo-detail.html
        todo-detail-controller.js
  app.js
  ...
*/