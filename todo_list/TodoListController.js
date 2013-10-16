angular.module('todos')
  .controller('TodoListController', ['$scope', '$filter', 'tdTodosStore', 'Todo', function ($scope, $filter, tdTodosStore, Todo) {
    var self = this;
    var tdMapById = $filter('tdMapById');

    $scope.todos = tdTodosStore.todos;

    this.updateChangedTodo = function updateChangedTodo (newVal, oldVal) {
      //Something was added, we can ignore that.
      if (newVal.length !== oldVal.length) return;

      var mappedOldVal = tdMapById(oldVal);
      var mappedNewVal = tdMapById(newVal);

      for (var id in mappedOldVal) {
        if (mappedOldVal.hasOwnProperty(id)) {
          if (mappedOldVal[id].done !== mappedNewVal[id].done) return Todo.update({id: id}, mappedNewVal[id]);
        }
      }
    };

    $scope.$watch('todos', this.updateChangedTodo, true);
  }]);
