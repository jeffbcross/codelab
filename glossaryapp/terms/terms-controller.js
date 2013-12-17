goog.provide('glossaryApp.terms.TermsController');

goog.require('glossaryApp.termsStore');

goog.require('glossaryApp.termsStoreService.termsStoreService');
goog.require('glossaryApp.profileStoreService.profileStoreService');

goog.scope(function () {

/**
 * Controller for Terms view of the
 * glossary application
 * @param {angular.Scope} $scope
 * @param {glossaryApp.termsStoreService.termsStoreService} termsStore
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 * @constructor
 * @ngInject
 */

var TermsController = function ($scope, termsStore, profileStore) {
  this.scope_ = $scope;
  this.termsStore = termsStore;

  this.terms = termsStore.terms;
  this.currentUser = profileStore;
}

TermsController.prototype.saveTerm = function () {
  this.termsStore_.add({
    name: this.scope_.newTerm.name,
    definition: this.scope_.newTerm.definition,
    creatorEmail: this.currentUser.email,
    createdAt: Date.now()
  });

  //Reset the model
  this.scope_.newTerm = {};
};

glossaryApp.terms.TermsController = TermsController;

});
