angular.module('todos')
  .service('tdTodosStore', ['Todo', function (Todo) {
    var self = this;
    this.todos = [];

    this.add = function (todo) {
      todo.id = Math.random() * 100 + (prev = this.todos[this.todos.length - 1] ? prev.id : 0);
      this.todos.push(todo);
    };

    this.update = function (id, todo) {
      Todo.save(todo);
    };

    Todo.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);