angular.module('todos')
  .directive('tdTodoComments', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoComments/todo-comments.html',
      link: function (scope, element, attrs) {
        scope.todo = $parse(attrs.todo)(scope);
      }
    }
  }]);