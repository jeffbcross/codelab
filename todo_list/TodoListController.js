angular.module('todos')
  .controller('TodoListController',
    ['$scope', '$filter', 'tdTodosStore', 'Todo',
    function ($scope, $filter, tdTodosStore, Todo) {
      var self = this;
      var tdMapById = $filter('tdMapById');

      this.todos = tdTodosStore.todos;

      this.todoChanged = function todoChanged (todo) {
        Todo.update({id: todo.id}, todo);
      };

      this.saveTodo = function () {
        tdTodosStore.add({
          text: $scope.newTodo.text,
          done: $scope.newTodo.done || false
        });

        //Reset the model
        $scope.newTodo = {};
      };
    }]);
