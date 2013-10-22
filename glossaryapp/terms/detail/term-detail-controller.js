angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', '$timeout', 'glTermsStore', 'glTermCommentsStore', 'glProfileStore', 'glTerm',
      function ($scope, $routeParams, $timeout, glTermsStore, glTermCommentsStore, glProfileStore, glTerm) {
        'use strict';

        var self = this;
        var postResolved = false;
        this.term = glTerm.get({id: $routeParams.id});
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
          } else if (self.term.$resolved && !postResolved) {
            //Prevent update for first watch after model is resolved.
            return postResolved = true;
          }

          // Wait 500ms after last change to update service
          if (self.throttledChange) {
            $timeout.cancel(self.throttledChange);
            delete self.throttledChange;
          }

          self.throttledChange = $timeout(function () {
            glTermsStore.updateById($routeParams.id, self.term);
          }, 250);
        }, true);
    }]);
