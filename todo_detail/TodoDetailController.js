angular.module('todos')
  .controller('TodoDetailController', ['$scope', '$routeParams', 'Todo', function ($scope, $routeParams, Todo) {
    $scope.todo = Todo.get({ id: $routeParams.id });
    console.log($scope.todo)
  }]);
