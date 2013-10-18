angular.module('todoApp')
  .filter('personalize', function (tdProfileStore) {
    return function (email) {
      if (angular.isString(tdProfileStore.email) && tdProfileStore.email === email) {
        return "You"
      }
      else {
        return email;
      }
    }
  });