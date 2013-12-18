goog.provide('glossaryApp.profileStoreService.module');
goog.provide('glossaryApp.profileStoreService.LOCALSTORAGE_PROFILE_KEY');
goog.provide('glossaryApp.profileStoreService.profileStoreService');

goog.require('glossaryApp.gravatarImageFactory.gravatarImageFactory');
goog.require('glossaryApp.gravatarImageFactory.module');

goog.require('goog.json.Serializer');
goog.require('goog.storage.mechanism.HTML5WebStorage');

/**
 * Key to save/load cached data from localStorage
 * @type {string}
 */
glossaryApp.profileStoreService.LOCALSTORAGE_PROFILE_KEY =
    'glossaryApp.profile';

goog.scope(function() {
/*
 * @constructor
 * @ngInject
 * @param {glossaryApp.gravatarImageFactory.gravatarImageFactory} gravatarImage
*/
var ProfileStoreService = glossaryApp.profileStoreService.profileStoreService =
    function(gravatarImage) {
      /*
       * @type {glossaryApp.gravatarImageFactory.gravatarImageFactory}
       */
      this.gravatarImage_ = gravatarImage;

      /*
       * @type {goog.storage.mechanism.HTML5WebStorage}
       */
      this.localStorage_ = new goog.storage.mechanism.HTML5WebStorage();

      var user = this.localStorage_.get(
          glossaryApp.profileStoreService.LOCALSTORAGE_PROFILE_KEY);
      user = goog.json.parse(user) || {};
      /*
       * URL to user's avatar image
       * @export
       * @type {string|undefined}
       */
      this.picture = user.picture;

      /*
       * User's email address
       * @export
       * @type {string|undefined}
       */
      this.email = user.email;
    };

ProfileStoreService.prototype.save = function() {
  /*
   * URL to user's avatar image
   * @export
   * @type {string}
   */
  this.picture = this.gravatarImage_(this.email);

  this.localStorage_.set(
      glossaryApp.profileStoreService.LOCALSTORAGE_PROFILE_KEY,
      goog.json.serialize({
        email: this.email,
        picture: this.picture
      }));
};

glossaryApp.profileStoreService.module = angular.module(
    'glossaryApp.profileStoreService',
    [glossaryApp.gravatarImageFactory.module.name]).
service(
    'profileStoreService',
    glossaryApp.profileStoreService.profileStoreService);

}); //goog.scope
