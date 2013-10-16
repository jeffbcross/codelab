angular.module('todos')
  .factory('Todo', ['$resource', 'TODOS_PATH',
    function ($resource, TODOS_PATH) {
      return $resource(TODOS_PATH, null, {
        //TODO: Remove this action when the service is complete
        get: {
          method: 'GET',
          url: TODOS_PATH,
          transformResponse: function (todos) {
            return JSON.parse(todos)[0];
          }
        },
        update: {
          url: TODOS_PATH + '/:id',
          method: 'PUT'
        }});
    }]);
