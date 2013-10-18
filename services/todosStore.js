angular.module('todoApp')
  .filter('tdMapById', function () {
    return function (todos) {
      var mapped = {};

      todos.forEach(function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  })
  .factory('Todo', ['$resource', 'TODOS_PATH',
    function ($resource, TODOS_PATH) {
      return $resource(TODOS_PATH + '/:id', null, {
        update: {
          url: TODOS_PATH + '/:id',
          method: 'PUT'
        }});
    }])
  .service('tdTodosStore', ['$filter', 'Todo', '$q', function ($filter, Todo, $q) {
    var self = this, queryResult;
    mapById = $filter('tdMapById');
    this.todos = [];

    this.add = function (todo) {
      var prev;

      this.todos.push(todo);
      Todo.save(todo);
    };

    this.updateById = function (id, todo) {
      var mapped = mapById(this.todos);
      mapped[id].text = todo.text;
      mapped[id].done = todo.done;
      Todo.update({id: id}, todo);
    };

    queryResult = Todo.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);