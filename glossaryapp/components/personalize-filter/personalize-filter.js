goog.provide('glossaryApp.personalizeFilter.module');

goog.require('glossaryApp.profileStoreService.profileStoreService');

/**
 * Filter to replace user email with personal pronoun
 * @constructor
 * @ngInject
 * @type {angular.filter}
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 */
glossaryApp.personalizeFilter.personalizeFilter = function(profileStore) {
  return function (email) {
    if (angular.isString(profileStore.email) && profileStore.email === email) {
      return "You";
    } else {
      return email;
    }
  };
};

angular.module('personalizeFilter', []).
filter('personalize', glossaryApp.personalizeFilter.personalizeFilter);
