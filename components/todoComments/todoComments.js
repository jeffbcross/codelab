angular.module('todos')
  .directive('tdTodoComments', ['$parse', 'tdTodoCommentsStore',
    function ($parse, tdTodoCommentsStore) {
      return {
        restrict: 'E',
        scope: true,
        templateUrl: 'components/todoComments/todo-comments.html',
        link: function (scope, element, attrs) {
          var todoId = $parse(attrs.todoId)(scope);
          scope.comments = tdTodoCommentsStore.getCommentsForTodo(todoId);
        }
      }
    }]);