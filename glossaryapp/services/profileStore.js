angular.module('glossaryApp')
  .factory('glGravatarEmail', function () {
    return function (email) {
      if (!angular.isString(email)) return;

      var emailHash = md5(email.toLowerCase());
      return 'http://gravatar.com/avatar/' + emailHash;
    }
  })
  .service('glProfileStore',
    ['$window', 'glGravatarEmail', 'LOCALSTORAGE_PROFILE_KEY',
    function ($window, glGravatarEmail, LOCALSTORAGE_PROFILE_KEY) {
      var user = $window.localStorage.getItem(LOCALSTORAGE_PROFILE_KEY);
      user = JSON.parse(user || '{}');
      this.picture = user.picture;
      this.email = user.email;

      this.save = function () {
        this.picture = glGravatarEmail(this.email);

        $window.localStorage.setItem(LOCALSTORAGE_PROFILE_KEY, JSON.stringify({
          email: this.email,
          picture: this.picture
        }));
      };
    }])