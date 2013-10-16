angular.module('todos')
  .directive('tdTodoComments', ['$parse', 'Comments', function ($parse, Comments) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoComments/todo-comments.html',
      link: function (scope, element, attrs) {
        scope.todo = $parse(attrs.todo)(scope);
        scope.comments = Comments.query({todoid: scope.todo.id});
      }
    }
  }]);