angular.module('todoApp')
  .factory('tdGravatarEmail', function () {
    return function (email) {
      var emailHash = md5(email.toLowerCase());
      return 'http://gravatar.com/avatar/' + emailHash;
    }
  })
  .service('tdProfileStore', ['$window', 'tdGravatarEmail', 'LOCALSTORAGE_PROFILE_KEY', function ($window, tdGravatarEmail, LOCALSTORAGE_PROFILE_KEY) {
    var user = $window.localStorage.getItem(LOCALSTORAGE_PROFILE_KEY);
    user = JSON.parse(user || '{}');
    this.picture = user.picture;
    this.email = user.email;

    this.save = function () {
      this.picture = tdGravatarEmail(this.email);

      $window.localStorage.setItem(LOCALSTORAGE_PROFILE_KEY, JSON.stringify({
        email: this.email,
        picture: this.picture
      }));
    };
  }])