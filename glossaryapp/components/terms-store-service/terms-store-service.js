angular.module('glossaryApp')
  .factory('glTerm', ['$resource', 'TERMS_PATH',
    function ($resource, TERMS_PATH) {
      'use strict';

      return $resource(TERMS_PATH + '/:id', null, {
        update: {
          url: TERMS_PATH + '/:id',
          method: 'PUT',
          transformResponse : function (data) {
            return null;
          }
        }});
    }])
  .service('glTermsStore', ['$filter', 'glTerm', '$q', function ($filter, glTerm, $q) {
    'use strict';

    var self = this, queryResult;

    this.terms = [];

    this.add = function (term) {
      this.terms.push(glTerm.save(term));
    };

    this.updateById = function (id, term) {
      var mapped = mapById(self.terms);
      mapped[id].name = term.name;
      mapped[id].definition = term.definition;
      glTerm.update({id: id}, term);
    };

    queryResult = glTerm.query(function (terms) {
      angular.forEach(terms, function (term) {
        self.terms.push(term);
      });
    });

    function mapById (terms) {
      var mapped = {};

      terms.forEach(function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  }]);
