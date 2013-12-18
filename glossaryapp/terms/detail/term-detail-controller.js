goog.provide('glossaryApp.terms.detail');
goog.provide('glossaryApp.terms.detail.TermDetailController');

goog.require('glossaryApp.termsStoreService.termsStoreService');
goog.require('glossaryApp.termCommentsStoreService.termCommentsStoreService');
goog.require('glossaryApp.profileStoreService.profileStoreService');
goog.require('glossaryApp.termResource.Term');

goog.scope(function() {

var TermDetailController =
    /**
     * Controller for the Term Detail view
     * of the application
     * @param {angular.Scope} $scope
     * @param {angular.$routeParams} $routeParams
     * @param {angular.$timeout} $timeout
     * @param {glossaryApp.termsStoreService.termsStoreService} termsStore
     * @param {glossaryApp.termCommentsStoreService.termCommentsStoreService}
              termCommentsStore
     * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
     * @param {glossaryApp.termResource.Term} Term
     * @constructor
     */
    glossaryApp.terms.detail.TermDetailController =
    function(
        $scope,
        $routeParams,
        $timeout,
        termsStore,
        termCommentsStore,
        profileStore,
        Term) {
      /**
       * @type {angular.Scope}
       * @private
       */
      this.scope_ = $scope;

      /**
       * @type {angular.$routeParams}
       * @private
       */
      this.routeParams_ = $routeParams;

      /**
       * @type {angular.$timeout}
       * @private
       */
      this.timeout_ = $timeout;

      /**
       * @type {glossaryApp.termsStoreService.termsStoreService}
       * @private
       */
      this.termsStore_ = termsStore;

      /**
       * @type {glossaryApp.termCommentsStoreService.termCommentsStoreService}
       * @private
       */
      this.termCommentsStore_ = termCommentsStore;

      /**
       * @type {glossaryApp.profileStoreService.profileStoreService}
       * @private
       */
      this.profileStore_ = profileStore;

      /**
       * @type {glossaryApp.termResource.Term}
       * @private
       */
      this.Term_ = Term;

      /**
       * @type {glossaryApp.termResource.Term}
       */
      this.term = Term.get({id: $routeParams.id});

      /**
       * @type {glossaryApp.profileStoreService.profileStoreService}
       */
      this.currentUser = profileStore;

      /**
       * @type
       *  {Array.<glossaryApp.
       *   termCommentsStoreService.
       *   termCommentsStoreService}
       */
      this.comments = termCommentsStore.getCommentsForTerm($routeParams.id);
    };

TermDetailController.prototype.addComment = function(comment) {
  comment.creatorEmail = this.currentUser.email;
  this.termCommentsStore_.addCommentToTerm(this.routeParams_.id, comment);

  /**
   * @type {Object<string, string>}
   */
  this.newComment = {};
};

TermDetailController.prototype.updateTerm = function() {
  // Wait 250ms after last change to update service
  if (this.throttledChange_) {
    this.timeout_.cancel(this.throttledChange_);
    this.throttledChange_ = null;
  }

  var updateTermsStore = goog.bind(function() {
    this.termsStore_.updateById(this.routeParams_.id, this.term);
  }, this);

  /**
   * @type {angular.$timeout}
   * @private
   */
  this.throttledChange_ = this.timeout_(updateTermsStore, 250);
};

}); // goog.scope
