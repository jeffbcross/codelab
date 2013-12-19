goog.provide('glossaryApp.termResource.module');
goog.provide('glossaryApp.termResource.Term');
goog.provide('glossaryApp.termResource.TERMS_PATH');

/**
 * Path to terms data on server
 * @type {string}
 */
glossaryApp.termResource.TERMS_PATH = '/api/terms';

/**
 * @return {angular.Resource}
 * @param {angular.Resource} $resource
 */
glossaryApp.termResource.Term = ['$resource', function($resource) {
  return $resource(glossaryApp.termResource.TERMS_PATH + '/:id', null, {
    update: {
      url: glossaryApp.termResource.TERMS_PATH + '/:id',
      method: 'PUT',
      transformResponse : function(data) {
        return null;
      }
    }});
}];

glossaryApp.termResource.module = angular['module'](
    'glossaryApp.termResource', ['glossaryApp']);
glossaryApp.termResource.module['factory'](
    'Term',
    glossaryApp.termResource.Term);
