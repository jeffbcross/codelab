goog.provide('glossaryApp.commentResource.module');
goog.provide('glossaryApp.commentResource.Comment');

/**
 * Resource
 * @type {angular.Resource}
 * @ngInject
 * @constructor
 * @param {angular.$resource} $resource
 * @param {string} COMMENTS_PATH
 */
glossaryApp.commentResource.Comment = function ($resource, COMMENTS_PATH) {
  return $resource(COMMENTS_PATH);
};

glossaryApp.commentResource.module = angular.module('glossaryApp.commentResource', [
  glossaryApp.application.module,
  'ngResource'
]).
factory('glossaryApp.commentResource.Comment', glossaryApp.commentResource.Comment);
