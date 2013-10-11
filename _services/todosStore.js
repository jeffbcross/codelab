angular.module('todos')
  .service('tdTodosStore', ['Todo', function (Todo) {
    var self = this;
    this.todos = [];

    this.add = function (todo) {
      this.todos.push(todo);
    };

    this.update = function (id, todo) {
      console.log('update', id, todo);
      Todo.save(todo);
    };

    Todo.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);