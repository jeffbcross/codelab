angular.module('todos')
  .controller('TodoListController', ['$scope', 'tdTodosStore', function ($scope, tdTodosStore) {
    $scope.todos = tdTodosStore.todos;

    $scope.$watch('todos', updateChangedTodo, true);

    function updateChangedTodo (newVal, oldVal) {
      //Something was added, we can ignore that.
      if (newVal.length !== oldVal.length) return;

      var mappedOldVal = map(oldVal);
      var mappedNewVal = map(newVal);

      for (var id in mappedOldVal) {
        if (mappedOldVal.hasOwnProperty(id)) {
          if (mappedOldVal[id] !== mappedNewVal[id]) return mappedNewVal[id].$save({id: id});
        }
      }
    }

    function map (arr) {
      var mapped = {};

      angular.forEach(arr, function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  }]);
