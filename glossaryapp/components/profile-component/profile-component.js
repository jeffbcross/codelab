angular.module('glossaryApp')
  .directive('glProfile', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/profile-component/profile-component.html',
      controller: ['glProfileStore', function (glProfileStore) {
        this.profileStore = glProfileStore;
      }],
      controllerAs: 'profile'
    }
  });
