goog.provide('glossaryApp.termsStoreService.module');
goog.provide('glossaryApp.termsStoreService.termsStoreService');

goog.require('glossaryApp.termResource.Term');

goog.scope(function() {

/**
 * @constructor
 */
var TermsStoreService = function (Term) {
  var queryResult;
  /**
   * List of terms used in controller and template
   * @type {Array.<glossaryApp.termResource.Term>}
   * @expose
   */
  this['terms'] = [];

  /**
   * @private
   * @type {glossaryApp.termResource.Term}
   */
  this.Term_ = Term;

  var pushTerm = goog.bind(function (term) {
    this['terms'].push(term);
  }, this);

  queryResult = Term['query'](function(terms) {
    angular['forEach'](terms, pushTerm);
  });

  function mapById(terms) {
    var mapped = {};

    terms['forEach'](function(item) {
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
  this['terms']['push'](this.Term_['save'](term));
};

/**
 * Update a term locally and save it to the server.
 * @param {string} id id of the term to be updated.
 * @param {glossaryApp.termResource.Term} term updated term content.
 */
TermsStoreService.prototype.updateById = function(id, term) {
  var mapped = mapById(this.terms);
  mapped[id].name = term['name'];
  mapped[id].definition = term['definition'];
  this.Term_['update']({id: id}, term);
};

/**
 * @constructor
 * @param {angular.Resource} Term Term resource type
 */
glossaryApp.termsStoreService.termsStoreService = ['Term', TermsStoreService];

}); // goog.scope

glossaryApp.termsStoreService.module = angular['module'](
    'glossaryApp.termsStoreService', [
        glossaryApp.termResource.module.name
    ]);
glossaryApp.termsStoreService.module['service'](
  'termsStore',
  glossaryApp.termsStoreService.termsStoreService);
