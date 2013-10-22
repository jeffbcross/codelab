angular.module('glossaryApp')
  .factory('gravatarImage', function () {
    'use strict';

    return function (email) {
      if (!angular.isString(email)) return;

      var emailHash = md5(email.toLowerCase());
      return 'http://gravatar.com/avatar/' + emailHash;
    }
  });
