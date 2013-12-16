goog.provide('glossaryApp.profileComponent.module');
goog.provide('glossaryApp.profileComponent.profileDirective');
goog.provide('glossaryApp.profileComponent.profileDirectiveController');
goog.provide('glossaryApp.profileComponent.DIRECTIVE_NAME');
goog.provide('glossaryApp.profileComponent.CONTROLLER_AS_NAME');

goog.require('glossaryApp.profileStoreService.profileStoreService');

glossaryApp.profileComponent.DIRECTIVE_NAME = 'glProfile';

/**
 * @constructor
 * @type {angular.Module.controller}
 * @ngInject
 * @param {glossaryApp.profileStoreService.profileStoreService} profileStore
 */
glossaryApp.profileComponent.profileDirectiveController = function (profileStore) {
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
    controller: glossaryApp.profileComponent.profileDirectiveController,
    controllerAs: 'profile'
  }
};

glossaryApp.profileComponent.module = angular.module('glossaryApp.profileComponent', [
  glossaryApp.profileStoreService.module.name
]).
directive(glossaryApp.profileComponent.DIRECTIVE_NAME,
  glossaryApp.profileComponent.profileDirective);
