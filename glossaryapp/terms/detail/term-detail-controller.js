angular.module('glossaryApp').
  controller('TermDetailController',
    ['$scope', '$routeParams', '$timeout', 'termsStore', 'termCommentsStore', 'profileStore', 'Term',
      function ($scope, $routeParams, $timeout, termsStore, termCommentsStore, profileStore, Term) {
        'use strict';

        var self = this;
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = profileStore;
        this.comments = termCommentsStore.getCommentsForTerm($routeParams.id);

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          termCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };

        this.updateTerm = function () {
          // Wait 500ms after last change to update service
          if (self.throttledChange) {
            $timeout.cancel(self.throttledChange);
            delete self.throttledChange;
          }

          self.throttledChange = $timeout(function () {
            termsStore.updateById($routeParams.id, self.term);
          }, 250);
        }
    }]);
