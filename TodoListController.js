angular.module('todos')
  .controller('TodoListController', function ($scope, Todo) {
    $scope.todos = Todo.query();
  });
