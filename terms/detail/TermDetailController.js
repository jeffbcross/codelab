angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', 'tdTermsStore', 'tdTermCommentsStore', 'tdProfileStore', 'Term',
      function ($scope, $routeParams, tdTermsStore, tdTermCommentsStore, tdProfileStore, Term) {
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = tdProfileStore;
        this.comments = tdTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.updateHeading = function (term) {
          tdTermsStore.updateById($routeParams.id, term);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          tdTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };
    }]);
