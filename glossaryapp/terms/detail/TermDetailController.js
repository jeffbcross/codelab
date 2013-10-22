angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', '$timeout', 'glTermsStore', 'glTermCommentsStore', 'glProfileStore', 'Term',
      function ($scope, $routeParams, $timeout, glTermsStore, glTermCommentsStore, glProfileStore, Term) {
        var self = this;
        var postResolved = false;
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = glProfileStore;
        this.comments = glTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          glTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };

        $scope.$watch('termDetail.term', function (newVal, oldVal) {
          if (!self.term.$resolved || newVal === oldVal) {
            return;
          }
          else if (self.term.$resolved && !postResolved) {
            //Prevent update for first watch after model is resolved.
            return postResolved = true;
          }

          // Wait 500ms after last change to update service
          if (this.throttledChange) {
            $timeout.cancel(this.throttledChange);
            delete this.throttledChange;
          }

          this.throttledChange = $timeout(function () {
            glTermsStore.updateById($routeParams.id, self.term);
          }, 250);
        }, true);
    }]);
