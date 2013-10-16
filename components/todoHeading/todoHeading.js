angular.module('todos')
  .directive('tdTodoHeading', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoHeading/todo-heading.html',
      controller: 'TodoHeadingController',
      link: function (scope, element, attrs) {
        scope.todo = $parse(attrs.todo)(scope);
      }
    };
  }]);