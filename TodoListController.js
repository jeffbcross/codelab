angular.module('todos')
  .controller('TodoListController', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.todos = Todo.query();
  }]);
