angular.module('todos')
  .directive('tdTodoList', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoList/todoList.html',
      link: function (scope, element, attrs) {
        scope.model = $parse(attrs.todos)(scope);
      }
    }
  }]);