'use strict';

/**
 * @fileoverview Primary module
 * for the angular glossary codelab app.
 */
goog.provide('glossaryApp.application.module');
goog.provide('glossaryApp.application.routeProvider');

goog.require('glossaryApp.terms.termsController');
goog.require('glossaryApp.terms.detail.termDetailController');
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

glossaryApp.application.routeProvider = function ($routeProvider) {
  $routeProvider.when('/terms', {
    controller: 'TermsController',
    templateUrl: 'terms/terms.html',
    controllerAs: 'terms'
  })
  .when('/terms/:id', {
    controller: 'TermDetailController',
    templateUrl: 'terms/detail/term-detail.html',
    controllerAs: 'termDetail'
  })
  .otherwise({
    redirectTo: '/terms'
  });
};

/**
 * The main module for the glossary app.
 *
 * @type {angular.Module}
 */
glossaryApp.application.module = angular.module('glossaryApp', [
  'ngRoute',
  'ngResource',
  glossaryApp.commentResource.name,
  glossaryApp.contenteditableDirective.name,
  glossaryApp.gravatarImageFactory.name,
  glossaryApp.personalizeFilter.name,
  glossaryApp.profileComponent.name,
  glossaryApp.profileStoreService.name,
  glossaryApp.termsStoreService.name,
  glossaryApp.termCommentsStoreService.name]);

glossaryApp.config(glossaryApp.application.routeProvider);
glossaryApp.constant('TERMS_PATH', '/api/terms');
glossaryApp.constant('COMMENTS_PATH', '/api/terms/:termId/comments');
glossaryApp.constant('LOCALSTORAGE_PROFILE_KEY', 'glossaryApp.profile');

glossaryApp.controller('TermDetailController', glossaryApp.terms.TermDetailController);
