angular.module('todos')
  .controller('TodoDetailController',
    ['$scope', '$routeParams', 'tdTodosStore', 'Todo',
      function ($scope, $routeParams, tdTodosStore, Todo) {
        this.todoId = $routeParams.id;
        this.todo = Todo.get({id: $routeParams.id});

        this.updateHeading = function (todo) {
          tdTodosStore.updateById(todo.id, todo);
          this.editingText = false;
        };

        $scope.$watch('todo.done', function (newVal, oldVal) {
          if (typeof oldVal === 'boolean' && newVal !== oldVal) {
            tdTodosStore.updateById(this.todoId, this.todo);
          }
        });
    }]);
