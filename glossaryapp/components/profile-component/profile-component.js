goog.provide('glossaryApp.profileComponent.module');

goog.require('glossaryApp.profileComponent.profileDirective');
goog.require('glossaryApp.profileComponent.DIRECTIVE_NAME');

/**
 * Directive name to be used inside template
 * @type {string}
 */
glossaryApp.profileComponent.DIRECTIVE_NAME = 'glProfile';

glossaryApp.profileComponent.module = angular.module(
    'glossaryApp.profileComponent',
    [glossaryApp.profileStoreService.module.name]).
directive(
    glossaryApp.profileComponent.DIRECTIVE_NAME,
    glossaryApp.profileComponent.profileDirective);
