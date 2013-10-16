angular.module('todos')
  .controller('TodoHeadingController', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.updateHeading = function (todo) {
      Todo.update({id: todo.id}, todo);
      $scope.editingText = false;
    };


    $scope.$watch('todo.done', function (newVal, oldVal) {
      if (typeof oldVal === 'boolean' && newVal !== oldVal) {
        Todo.update({id: $scope.todo.id}, $scope.todo);
      }
    });
  }]);
