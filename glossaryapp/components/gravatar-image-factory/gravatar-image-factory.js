angular.module('gravatarImageFactory', ['md5Factory']).
  factory('gravatarImage', ['md5', function (md5) {
    'use strict';

    return function (email) {
      if (!angular.isString(email)) return;

      var emailHash = md5(email.toLowerCase());
      return 'http://gravatar.com/avatar/' + emailHash;
    }
  }]);
