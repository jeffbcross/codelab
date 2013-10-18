angular.module('todos')
  .controller('TodoDetailController',
    ['$scope', '$routeParams', 'tdTodosStore', 'tdTodoCommentsStore', 'Todo',
      function ($scope, $routeParams, tdTodosStore, tdTodoCommentsStore, Todo) {
        this.todoId = $routeParams.id;
        this.todo = Todo.get({id: $routeParams.id});

        this.updateHeading = function (todo) {
          tdTodosStore.updateById(todo.id, todo);
          this.editingText = false;
        };

        this.addComment = function (comment) {
          tdTodoCommentsStore.addCommentToTodo($routeParams.id, comment);
          this.newComment = {};
        };

        $scope.$watch('todo.done', function (newVal, oldVal) {
          if (typeof oldVal === 'boolean' && newVal !== oldVal) {
            tdTodosStore.updateById(this.todoId, this.todo);
          }
        });
    }]);
