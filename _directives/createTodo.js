angular.module('todos')
  .directive('tdCreateTodo', function () {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: '_directives/createTodo.html',
      controller: 'CreateTodoController'
    };
  });
