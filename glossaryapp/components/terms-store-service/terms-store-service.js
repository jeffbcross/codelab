goog.provide('glossaryApp.termsStoreService.module');
goog.provide('glossaryApp.termsStoreService');

goog.require('glossaryApp.termResource.Term');

goog.scope(function() {

/**
 * @constructor
 * @param {angular.Resource} Term Term resource type
 */
var TermsStoreService = glossaryApp.termsStoreService.termsStoreService =
    function (Term) {
  var queryResult;
  /**
   * List of terms used in controller and template
   * @type {Array.<glossaryApp.termResource.Term>}
   * @expose
   */
  this.terms = [];

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
};

/**
 * Add a new term locally and on the server.
 * @param {glossaryApp.termResource.Term} term
 */
TermsStoreService.prototype.add = function(term) {
  this.terms.push(Term.save(term));
};

/*
 * Update a term locally and save it to the server.
 * @param {string} id id of the term to be updated.
 * @param {glossaryApp.termResource.Term} term updated term content.
 */
TermsStoreService.prototype.updateById = function(id, term) {
  var mapped = mapById(self.terms);
  mapped[id].name = term.name;
  mapped[id].definition = term.definition;
  Term.update({id: id}, term);
};

}); // goog.scope

glossaryApp.termsStoreService.module = angular.module(
    'glossaryApp.termsStoreService', []).
service('termsStoreService', glossaryApp.termsStoreService.termsStoreService);
