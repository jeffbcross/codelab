goog.provide('glossaryApp.profileComponent.profileDirective');
goog.provide('glossaryApp.profileComponent.ProfileDirectiveController');
goog.provide('glossaryApp.profileComponent.DIRECTIVE_NAME');
goog.provide('glossaryApp.profileComponent.CONTROLLER_AS_NAME');

goog.require('glossaryApp.profileStoreService.profileStoreService');

glossaryApp.profileComponent.DIRECTIVE_NAME = 'glProfile';

glossaryApp.profileComponent.CONTROLLER_AS_NAME = 'profile';

/**
 * Controller for the profile component directive.
 * @return {angular.Controller} Controller for the profile component
 * @ngInject
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 */
glossaryApp.profileComponent.ProfileDirectiveController =
    function (profileStore) {
      this.profileStore = profileStore;
    };

/**
 * The component to show a user's profile (email and avatar)
 * @return {angular.Directive} Directive definition object.
 */
glossaryApp.profileComponent.profileDirective = function () {
  return {
    scope: {},
    restrict: 'E',
    templateUrl: 'components/profile-component/profile-component.html',
    controller: glossaryApp.profileComponent.ProfileDirectiveController,
    controllerAs: glossaryApp.profileComponent.CONTROLLER_AS_NAME
  }
};
