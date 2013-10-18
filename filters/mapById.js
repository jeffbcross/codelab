angular.module('todos')
  .filter('tdMapById', function () {
    return function (todos) {
      var mapped = {};

      todos.forEach(function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  });
