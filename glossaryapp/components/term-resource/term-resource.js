goog.provide('glossaryApp.termResource.module');
goog.provide('glossaryApp.termResource.Term');
goog.provide('glossaryApp.termResource.TERMS_PATH');

glossaryApp.termResource.TERMS_PATH = '/api/terms';

/**
 * @ngInject
 * @return {angular.Resource}
 * @param {angular.Resource} $resource
 */
glossaryApp.termResource.Term = function ($resource) {
  return $resource(glossaryApp.termResource.TERMS_PATH + '/:id', null, {
    update: {
      url: glossaryApp.termResource.TERMS_PATH + '/:id',
      method: 'PUT',
      transformResponse : function (data) {
        return null;
      }
    }});
};

glossaryApp.termResource.module = angular.module('glossaryApp.termResource',
    ['glossaryApp']).
factory('Term', glossaryApp.termResource.Term);
