angular.module('todoApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', 'tdTermsStore', 'tdTermCommentsStore', 'Term',
      function ($scope, $routeParams, tdTermsStore, tdTermCommentsStore, Term) {
        this.term = Term.get({id: $routeParams.id});
        this.comments = tdTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.updateHeading = function (term) {
          tdTermsStore.updateById($routeParams.id, term);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          tdTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };
    }]);
