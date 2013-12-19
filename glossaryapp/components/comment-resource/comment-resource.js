goog.provide('glossaryApp.commentResource.module');
goog.provide('glossaryApp.commentResource.Comment');

goog.require('glossaryApp.COMMENTS_PATH');

goog.scope(function() {

/**
 * Resource
 * @type {angular.Resource}
 * @constructor
 * @param {angular.$resource} $resource
 * @param {string} COMMENTS_PATH
 */
glossaryApp.commentResource.Comment = ['$resource', 'COMMENTS_PATH', function($resource, COMMENTS_PATH) {
  return $resource(COMMENTS_PATH);
}];

glossaryApp.commentResource.module = angular['module'](
    'glossaryApp.commentResource',
    ['ngResource'])
glossaryApp.commentResource.module['factory'](
    'Comment',
    glossaryApp.commentResource.Comment);

}); // goog.scope
