angular.module('glossaryApp')
  .filter('tdMapById', function () {
    return function (todos) {
      var mapped = {};

      todos.forEach(function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  })
  .factory('Term', ['$resource', 'TODOS_PATH',
    function ($resource, TODOS_PATH) {
      return $resource(TODOS_PATH + '/:id', null, {
        update: {
          url: TODOS_PATH + '/:id',
          method: 'PUT'
        }});
    }])
  .service('tdTermsStore', ['$filter', 'Term', '$q', function ($filter, Term, $q) {
    var self = this, queryResult;
    mapById = $filter('tdMapById');
    this.terms = [];

    this.add = function (todo) {
      var prev;

      this.terms.push(todo);
      Term.save(todo);
    };

    this.updateById = function (id, term) {
      var mapped = mapById(this.terms);
      mapped[id].name = term.name;
      Term.update({id: id}, term);
    };

    queryResult = Term.query(function (todos) {
      angular.forEach(todos, function (todo) {
        self.todos.push(todo);
      });
    });
  }]);