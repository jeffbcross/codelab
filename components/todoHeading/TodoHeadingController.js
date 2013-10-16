angular.module('todos')
  .controller('TodoHeadingController', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.updateHeading = function (todo) {
      Todo.update({id: todo.id}, todo);
      $scope.editingText = false;
    };
  }]);
