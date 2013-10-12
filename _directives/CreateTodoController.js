angular.module('todos')
  .controller('CreateTodoController', ['$scope', 'tdTodosStore', function ($scope, tdTodosStore) {
    $scope.saveTodo = function () {
      tdTodosStore.add({
        text: $scope.newTodo.text,
        done: $scope.newTodo.done || false
      });

      //Reset the model
      angular.extend($scope.newTodo, {text: null, done: null, id: null});
    };
  }]);