angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', '$timeout', 'glTermsStore', 'glTermCommentsStore', 'glProfileStore', 'Term',
      function ($scope, $routeParams, $timeout, glTermsStore, glTermCommentsStore, glProfileStore, Term) {
        'use strict';

        var self = this;
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = glProfileStore;
        this.comments = glTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          glTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };

        this.updateTerm = function () {
          // Wait 500ms after last change to update service
          if (self.throttledChange) {
            $timeout.cancel(self.throttledChange);
            delete self.throttledChange;
          }

          self.throttledChange = $timeout(function () {
            glTermsStore.updateById($routeParams.id, self.term);
          }, 250);
        }
    }]);
