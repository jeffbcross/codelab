angular.module('todos')
  .controller('TodoHeadingController',
    ['$scope', 'Todo', 'tdTodosStore',
      function ($scope, Todo, tdTodosStore) {
        $scope.todo = Todo.get({id: $scope.todoId});

        $scope.updateHeading = function (todo) {
          tdTodosStore.updateById($scope.todoId, todo);
          $scope.editingText = false;
        };

        $scope.$watch('todo.done', function (newVal, oldVal) {
          if (typeof oldVal === 'boolean' && newVal !== oldVal) {
            Todo.update({id: $scope.todoId}, $scope.todo);
          }
        });
      }]);
