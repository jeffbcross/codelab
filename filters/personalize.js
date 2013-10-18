angular.module('glossaryApp')
  .filter('personalize', function (glProfileStore) {
    return function (email) {
      if (angular.isString(glProfileStore.email) && glProfileStore.email === email) {
        return "You"
      }
      else {
        return email;
      }
    }
  });