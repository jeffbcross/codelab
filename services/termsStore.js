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
  .factory('Term', ['$resource', 'TERMS_PATH',
    function ($resource, TERMS_PATH) {
      return $resource(TERMS_PATH + '/:id', null, {
        update: {
          url: TERMS_PATH + '/:id',
          method: 'PUT'
        }});
    }])
  .service('tdTermsStore', ['$filter', 'Term', '$q', function ($filter, Term, $q) {
    var self = this, queryResult;
    mapById = $filter('tdMapById');
    this.terms = [];

    this.add = function (term) {
      var prev;

      this.terms.push(term);
      Term.save(term);
    };

    this.updateById = function (id, term) {
      var mapped = mapById(this.terms);
      mapped[id].name = term.name;
      Term.update({id: id}, term);
    };

    queryResult = Term.query(function (terms) {
      angular.forEach(terms, function (term) {
        self.terms.push(term);
      });
    });
  }]);
