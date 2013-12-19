goog.provide('glossaryApp.terms.TermsController');

goog.require('glossaryApp.termsStoreService.termsStoreService');
goog.require('glossaryApp.profileStoreService.profileStoreService');
goog.require('glossaryApp.termResource.Term');

goog.scope(function() {

/**
 * @constructor
 */
var TermsController = function($scope, termsStore, profileStore) {
  /**
   * @private
   * @type {angular.Scope}
   */
  this.scope_ = $scope;

  /**
   * @type {glossaryApp.termsStoreService.termsStoreService}
   * @private
   */
  this.termsStore_ = termsStore;

  /**
   * @type {Array.<glossaryApp.termResource.Term>}
   */
  this['terms'] = termsStore['terms'];

  /**
   * A user's own profile
   * @type {glossaryApp.profileStoreService.profileStoreService}
   */
  this['currentUser'] = profileStore;
};

/**
 * @expose
 */
TermsController.prototype.saveTerm = function() {
  this.termsStore_.add({
    name: this.scope_['newTerm']['name'],
    definition: this.scope_['newTerm']['definition'],
    creatorEmail: this['currentUser']['email'],
    createdAt: goog.now()
  });

  //Reset the model
  this.scope_['newTerm'] = {};
};

/**
 * Controller for Terms view of the
 * glossary application
 * @param {angular.Scope} $scope
 * @param {glossaryApp.termsStoreService.termsStoreService} termsStore
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 * @constructor
 */
glossaryApp.terms.TermsController = [
    '$scope',
    'termsStore',
    'profileStore', TermsController];

});// goog.scope
