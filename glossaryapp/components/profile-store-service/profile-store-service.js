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
      this.gravatarImage_ = gravatarImage;

      this.localStorage_ = new goog.storage.mechanism.HTML5WebStorage();

      var user = this.localStorage_.get(
          glossaryApp.profileStoreService.LOCALSTORAGE_PROFILE_KEY);
      user = goog.json.parse(user) || {};
      this.picture = user.picture;
      this.email = user.email;
    };

ProfileStoreService.prototype.save = function() {
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
    'glossaryApp.profileStoreService',
    glossaryApp.profileStoreService.profileStoreService);

}); //goog.scope
