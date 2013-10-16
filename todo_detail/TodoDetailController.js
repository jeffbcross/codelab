angular.module('todos')
  .controller('TodoDetailController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.todoId = $routeParams.id;
  }]);
