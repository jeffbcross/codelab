angular.module('todos')
  .service('tdTodosStore', ['Todo', function (Todo) {
    var self = this;
    this.todos = [];

    this.add = function (todo) {
      var prev;
      this.todos.push(todo);
      Todo.save(todo);
    };

    Todo.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);