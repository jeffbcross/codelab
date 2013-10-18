angular.module('todoApp')
  .factory('Todo', ['$resource', 'TODOS_PATH',
    function ($resource, TODOS_PATH) {
      return $resource(TODOS_PATH + '/:id', null, {
        update: {
          url: TODOS_PATH + '/:id',
          method: 'PUT'
        }});
    }]);
