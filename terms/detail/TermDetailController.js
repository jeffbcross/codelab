angular.module('todoApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', 'tdTodosStore', 'tdTermCommentsStore', 'Todo',
      function ($scope, $routeParams, tdTodosStore, tdTermCommentsStore, Todo) {
        this.term = Todo.get({id: $routeParams.id});
        this.comments = tdTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.updateHeading = function (term) {
          tdTodosStore.updateById($routeParams.id, term);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          tdTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };
    }]);
