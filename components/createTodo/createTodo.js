angular.module('todos')
  .directive('tdCreateTodo', function () {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/createTodo/createTodo.html',
      controller: 'CreateTodoController'
    };
  });
