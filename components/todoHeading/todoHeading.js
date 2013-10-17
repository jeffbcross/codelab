angular.module('todos')
  .directive('tdTodoHeading', ['$parse', 'Todo', function ($parse, Todo) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoHeading/todo-heading.html',
      controller: 'TodoHeadingController',
      link: function (scope, element, attrs) {
        scope.todoId = $parse(attrs.todoId)(scope);
        scope.todo = Todo.get({id: scope.todoId});
      }
    };
  }]);