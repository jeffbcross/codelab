angular.module('glossaryApp')
  .controller('TermsListController',
    ['$scope', 'glTermsStore', 'profileStore',
    function ($scope, glTermsStore, profileStore) {
      'use strict';

      this.terms = glTermsStore.terms;
      this.currentUser = profileStore;

      this.saveTerm = function () {
        glTermsStore.add({
          name: $scope.newTerm.name,
          definition: $scope.newTerm.definition,
          creatorEmail: this.currentUser.email,
          createdAt: Date.now()
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
