angular.module('todoApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', 'tdTodosStore', 'tdTodoCommentsStore', 'Todo',
      function ($scope, $routeParams, tdTodosStore, tdTodoCommentsStore, Todo) {
        this.term = Todo.get({id: $routeParams.id});
        this.comments = tdTodoCommentsStore.getCommentsForTodo($routeParams.id);

        this.updateHeading = function (term) {
          tdTodosStore.updateById($routeParams.id, term);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          tdTodoCommentsStore.addCommentToTodo($routeParams.id, comment);
          this.newComment = {};
        };
    }]);
