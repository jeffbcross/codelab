angular.module('todos')
  .filter('tdMapById', function () {
    return function (todos) {
      var mapped = {};

      angular.forEach(todos, function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  });
