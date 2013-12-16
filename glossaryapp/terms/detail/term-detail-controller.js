'use strict';

goog.provide('glossaryApp.terms.TermDetailController');

// goog.require('glossaryApp.termsStore');
// goog.require('glossaryApp.termCommentsStoreService.termCommentsStoreService');
// goog.require('glossaryApp.profileStoreService.profileStoreService');
// goog.require('glossaryApp.termResource.Term');

goog.scope(function () {
  /**
   * Controller for the Term Detail view
   * of the application
   * @param {angular.Scope} $scope
   * @param {angular.$routeParams} $routeParams
   * @param {angular.$timeout} $timeout
   * @param {glossaryApp.termsStoreService.termsStoreService} termsStore
   * @param {glossaryApp.termCommentsStoreService.termCommentsStoreService} termCommentsStore
   * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
   * @param {glossaryApp.termResource.Term} Term
   * @constructor
   * @ngInject
   */
  glossaryApp.terms.TermDetailController = function ($scope, $routeParams,
    $timeout, termsStore, termCommentsStore, profileStore, Term) {
      var self = this;

      /**
       * @type {angular.Scope}
       * @private
       */
      this.scope_ = $scope;
      this.routeParams_ = $routeParams;
      this.timeout_ = $timeout;
      this.termsStore_ = termsStore;
      this.termCommentsStore_ = termCommentsStore;
      this.profileStore_ = profileStore;
      this.Term_ = Term;

      self.term = Term.get({id: $routeParams.id});
      self.currentUser = profileStore;
      self.comments = termCommentsStore.getCommentsForTerm($routeParams.id);
    };

  glossaryApp.terms.TermDetailController.prototype.addComment = function (comment) {
    comment.creatorEmail = this.currentUser.email;
    this.termCommentsStore_.addCommentToTerm(this.routeParams_.id, comment);
    this.newComment = {};
  };

  glossaryApp.terms.TermDetailController.prototype.updateTerm = function () {
    // Wait 250ms after last change to update service
    if (this.throttledChange) {
      this.timeout_.cancel(this.throttledChange);
      this.throttledChange = null;
    }

    this.throttledChange = this.timeout_(function () {
      this.termsStore_.updateById(this.routeParams_.id, this.term);
    }, 250);
  };
}); // goog.scope
