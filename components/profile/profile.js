angular.module('glossaryApp')
  .directive('glProfile', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/profile/profile.html',
      controller: ['glProfileStore', function (glProfileStore) {
        this.profileStore = glProfileStore;
      }],
      controllerAs: 'profile'
    }
  });
