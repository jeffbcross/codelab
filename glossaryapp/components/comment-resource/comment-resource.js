goog.provide('glossaryApp.commentResource.module');
goog.provide('glossaryApp.commentResource.Comment');

goog.provide('glossaryApp.commentResource.COMMENTS_PATH');

/**
 * Path to comments on server
 * @type {string}
 */
glossaryApp.commentResource.COMMENTS_PATH = '/api/terms/:termId/comments'

glossaryApp.constant(
    'COMMENTS_PATH',
    glossaryApp.commentResource.COMMENTS_PATH);

goog.scope(function() {

var moduleDependencies = [
  glossaryApp.application.module,
  'ngResource'];

/**
 * Resource
 * @type {angular.Resource}
 * @ngInject
 * @constructor
 * @param {angular.$resource} $resource
 * @param {string} COMMENTS_PATH
 */
glossaryApp.commentResource.Comment = function($resource, COMMENTS_PATH) {
  return $resource(COMMENTS_PATH);
};

glossaryApp.commentResource.module = angular.module(
    'glossaryApp.commentResource',
    moduleDependencies).
factory('glossaryApp.commentResource.Comment',
    glossaryApp.commentResource.Comment);

}); // goog.scope
