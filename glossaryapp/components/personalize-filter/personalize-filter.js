goog.provide('glossaryApp.personalizeFilter.module');

goog.require('glossaryApp.profileStoreService.profileStoreService');

goog.scope(function() {

/**
 * @constructor
 */
var ProfileStore = function(profileStore) {
  return function(email) {
    if (goog.isString(profileStore.email) &&
        profileStore.email === email) {
      return "You";
    } else {
      return email;
    }
  };
};

/**
 * Filter to replace user email with personal pronoun
 * @constructor
 * @type {angular.filter}
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 */
glossaryApp.personalizeFilter.personalizeFilter = [
    'profileStore', ProfileStore];

});// goog.scope

glossaryApp.personalizeFilter.module = angular['module'](
    'personalizeFilter',
    []);
glossaryApp.personalizeFilter.module['filter'](
    'personalize',
    glossaryApp.personalizeFilter.personalizeFilter);
