angular.module('todoApp')
  .controller('TodoDetailController',
    ['$scope', '$routeParams', 'tdTodosStore', 'tdTodoCommentsStore', 'Todo',
      function ($scope, $routeParams, tdTodosStore, tdTodoCommentsStore, Todo) {
        this.todo = Todo.get({id: $routeParams.id});
        this.comments = tdTodoCommentsStore.getCommentsForTodo($routeParams.id);

        this.updateHeading = function (todo) {
          tdTodosStore.updateById($routeParams.id, todo);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          tdTodoCommentsStore.addCommentToTodo($routeParams.id, comment);
          this.newComment = {};
        };

        $scope.$watch('todo.done', function (newVal, oldVal) {
          if (typeof oldVal === 'boolean' && newVal !== oldVal) {
            tdTodosStore.updateById($routeParams.id, this.todo);
          }
        });
    }]);
