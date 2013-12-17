angular.module('termsStoreService', ['termResource']).
  service('termsStore', ['Term', function(Term) {
    'use strict';

    var self = this, queryResult;

    this.terms = [];

    this.add = function(term) {
      this.terms.push(Term.save(term));
    };

    this.updateById = function(id, term) {
      var mapped = mapById(self.terms);
      mapped[id].name = term.name;
      mapped[id].definition = term.definition;
      Term.update({id: id}, term);
    };

    queryResult = Term.query(function(terms) {
      angular.forEach(terms, function(term) {
        self.terms.push(term);
      });
    });

    functionmapById (terms) {
      var mapped = {};

      terms.forEach(function(item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  }]);
