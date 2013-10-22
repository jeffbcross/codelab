angular.module('glossaryApp').
  directive('glProfile', function () {
    'use strict';

    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/profile-component/profile-component.html',
      controller: ['profileStore', function (profileStore) {
        this.profileStore = profileStore;
      }],
      controllerAs: 'profile'
    }
  });
