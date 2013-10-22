angular.module('glossaryApp').
  filter('personalize', ['profileStore', function (profileStore) {
    'use strict';

    return function (email) {
      if (angular.isString(profileStore.email) && profileStore.email === email) {
        return "You";
      } else {
        return email;
      }
    };
  }]);
