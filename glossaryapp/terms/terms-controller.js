angular.module('glossaryApp').
  controller('TermsController',
    ['$scope', 'termsStore', 'profileStore',
    function ($scope, termsStore, profileStore) {
      'use strict';

      this.terms = termsStore.terms;
      this.currentUser = profileStore;

      this.saveTerm = function () {
        termsStore.add({
          name: $scope.newTerm.name,
          definition: $scope.newTerm.definition,
          creatorEmail: this.currentUser.email,
          createdAt: Date.now()
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
