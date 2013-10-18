angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', 'glTermsStore', 'glTermCommentsStore', 'glProfileStore', 'Term',
      function ($scope, $routeParams, glTermsStore, glTermCommentsStore, glProfileStore, Term) {
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = glProfileStore;
        this.comments = glTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.updateHeading = function (term) {
          glTermsStore.updateById($routeParams.id, term);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          glTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };
    }]);
