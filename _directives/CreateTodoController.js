angular.module('todos')
  .controller('CreateTodoController', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.saveTodo = function () {
      // Todo.save({
      //   text: $scope.newTodo.text,
      //   done: $scope.newTodo.done || false
      // });

      //Reset the model
      angular.extend($scope.newTodo, {text: null, done: null});
    };
  }]);