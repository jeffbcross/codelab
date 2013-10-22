angular.module('glossaryApp')
  .filter('glMapById', function () {
    return function (terms) {
      var mapped = {};

      terms.forEach(function (item) {
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
  .service('glTermsStore', ['$filter', 'Term', '$q', function ($filter, Term, $q) {
    var self = this, queryResult;
    mapById = $filter('glMapById');
    this.terms = [];

    this.add = function (term) {
      this.terms.push(Term.save(term));
    };

    this.updateById = function (id, term) {
      var mapped = mapById(this.terms);
      mapped[id].name = term.name;
      mapped[id].definition = term.definition;
      Term.update({id: id}, term);
    };

    queryResult = Term.query(function (terms) {
      angular.forEach(terms, function (term) {
        self.terms.push(term);
      });
    });
  }]);
