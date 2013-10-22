angular.module('termResource', ['glossaryApp']).
  factory('Term', ['$resource', 'TERMS_PATH',
    function ($resource, TERMS_PATH) {
      'use strict';

      return $resource(TERMS_PATH + '/:id', null, {
        update: {
          url: TERMS_PATH + '/:id',
          method: 'PUT',
          transformResponse : function (data) {
            return null;
          }
        }});
    }]);
