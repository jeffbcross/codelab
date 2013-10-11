angular.module('todos')
  .controller('TodoListController', ['$scope', 'tdTodosStore', function ($scope, tdTodosStore) {
    $scope.todos = tdTodosStore.todos;
  }]);
