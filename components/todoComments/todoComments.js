angular.module('todos')
  .directive('tdTodoComments', ['$parse', 'tdTodoCommentsStore', function ($parse, tdTodoCommentsStore) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'components/todoComments/todo-comments.html',
      link: function (scope, element, attrs) {
        scope.todo = $parse(attrs.todo)(scope);
        scope.comments = tdTodoCommentsStore.getCommentsForTodo(scope.todo.id);
      }
    }
  }]);