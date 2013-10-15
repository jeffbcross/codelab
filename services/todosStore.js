angular.module('todos')
  .service('tdTodosStore', ['Todo', function (Todo) {
    var self = this;
    this.todos = [];

    this.add = function (todo) {
      var prev;
      if (typeof todo.id === 'undefined') todo.id = Math.random() * 100 + (this.todos[this.todos.length - 1] ? this.todos[this.todos.length - 1].id : 0);
      this.todos.push(todo);
    };

    Todo.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);