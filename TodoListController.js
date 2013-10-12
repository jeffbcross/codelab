angular.module('todos')
  .controller('TodoListController', ['$scope', 'tdTodosStore', 'Todo', function ($scope, tdTodosStore, Todo) {
    var self = this;
    $scope.todos = tdTodosStore.todos;

    this.updateChangedTodo = function updateChangedTodo (newVal, oldVal) {
      //Something was added, we can ignore that.
      if (newVal.length !== oldVal.length) return;

      var mappedOldVal = self.map(oldVal);
      var mappedNewVal = self.map(newVal);

      for (var id in mappedOldVal) {
        if (mappedOldVal.hasOwnProperty(id)) {
          if (mappedOldVal[id] !== mappedNewVal[id]) return Todo.update({id: parseInt(id, 0)}, mappedNewVal[id]);
        }
      }
    }

    this.map = function map (arr) {
      var mapped = {};

      angular.forEach(arr, function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }

    $scope.$watch('todos', this.updateChangedTodo, true);
  }]);
