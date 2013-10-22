angular.module('glossaryApp').
  service('profileStore',
    ['$window', 'gravatarImage', 'LOCALSTORAGE_PROFILE_KEY',
    function ($window, gravatarImage, LOCALSTORAGE_PROFILE_KEY) {
      'use strict';

      var user = $window.localStorage.getItem(LOCALSTORAGE_PROFILE_KEY);
      user = JSON.parse(user || '{}');
      this.picture = user.picture;
      this.email = user.email;

      this.save = function () {
        this.picture = gravatarImage(this.email);

        $window.localStorage.setItem(LOCALSTORAGE_PROFILE_KEY, JSON.stringify({
          email: this.email,
          picture: this.picture
        }));
      };
    }]);
