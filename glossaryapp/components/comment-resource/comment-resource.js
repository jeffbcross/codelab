angular.module('glossaryComment', ['glossaryApp', 'ngResource']).
  factory('Comment', ['$resource', 'COMMENTS_PATH',
    function ($resource, COMMENTS_PATH) {
      'use strict';

      return $resource(COMMENTS_PATH);
    }]);
