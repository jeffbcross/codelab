'use strict';

/**
 * @fileoverview Primary module
 * for the angular glossary codelab app.
 */
goog.provide('glossaryApp.application.module');
goog.provide('glossaryApp.application.routes');

goog.require('glossaryApp.terms.TermsController');
goog.require('glossaryApp.terms.detail.TermDetailController');

goog.require('glossaryApp.commentResource.module');
goog.require('glossaryApp.contenteditableDirective.module');
goog.require('glossaryApp.gravatarImageFactory.module');
goog.require('glossaryApp.personalizeFilter.module');
goog.require('glossaryApp.profileComponent.module');
goog.require('glossaryApp.profileStoreService.module');
goog.require('glossaryApp.termsStoreService.module');
goog.require('glossaryApp.termCommentsStoreService.module');

/**
 * @param {angular.$routeProvider} $routeProvider The Angular route provider
 *     service.
 * @ngInject
 */

glossaryApp.application.routes = function($routeProvider) {
  $routeProvider.when('/terms', {
    controller: glossaryApp.terms.TermsController,
    templateUrl: 'terms/terms.html',
    controllerAs: 'terms'
  }).
  when('/terms/:id', {
    controller: glossaryApp.terms.detail.TermDetailController,
    templateUrl: 'terms/detail/term-detail.html',
    controllerAs: 'termDetail'
  }).
  otherwise({
    redirectTo: '/terms'
  });
};

/**
 * The main module for the glossary app.
 *
 * @type {angular.Module}
 */
glossaryApp.application.module = angular.module(
  'glossaryApp', [
    'ngRoute',
    'ngResource',
    glossaryApp.commentResource.module.name,
    glossaryApp.contenteditableDirective.module.name,
    glossaryApp.gravatarImageFactory.module.name,
    glossaryApp.personalizeFilter.module.name,
    glossaryApp.profileComponent.module.name,
    glossaryApp.profileStoreService.module.name,
    glossaryApp.termsStoreService.module.name,
    glossaryApp.termCommentsStoreService.module.name]);

glossaryApp.config(glossaryApp.application.routes);
