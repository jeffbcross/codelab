angular.module('todos')
  .service('tdTodosStore', ['Todo', function (Todo) {
    this.todos = Todo.query();

    this.add = function (todo) {
      this.todos.push(todo);
    };
  }]);