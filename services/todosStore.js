angular.module('todos')
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