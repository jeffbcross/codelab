goog.provide('glossaryApp.profileComponent.module');

goog.require('glossaryApp.profileComponent.profileDirective');
goog.require('glossaryApp.profileComponent.profileDirectiveController');
goog.require('glossaryApp.profileComponent.DIRECTIVE_NAME');

glossaryApp.profileComponent.module = angular.module(
    'glossaryApp.profileComponent',
    [glossaryApp.profileStoreService.module.name]).
directive(glossaryApp.profileComponent.DIRECTIVE_NAME,
  glossaryApp.profileComponent.profileDirective);
