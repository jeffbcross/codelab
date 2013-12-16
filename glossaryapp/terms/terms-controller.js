/**
 * Controller for Terms view of the
 * glossary application
 * @constructor
 * @param {Object} $scope
 * @param {Object} termsStore
 * @param {Object} profileStore
 */

function TermsController ($scope, termsStore, profileStore) {
  'use strict';

  var self = this;

  self.terms = termsStore.terms;
  self.currentUser = profileStore;

  self.saveTerm = function () {
    termsStore.add({
      name: $scope.newTerm.name,
      definition: $scope.newTerm.definition,
      creatorEmail: self.currentUser.email,
      createdAt: Date.now()
    });

    //Reset the model
    $scope.newTerm = {};
  };
}

angular.module('glossaryApp').
  controller('TermsController',
    ['$scope', 'termsStore', 'profileStore', TermsController]);
