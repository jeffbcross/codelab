'use strict';

describe('TermsListController', function () {
  var termsListController, scope, glTermsStore;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, TERMS_PATH, _glTermsStore_) {
    scope = $rootScope.$new();

    glTermsStore = _glTermsStore_;
    termsListController = $controller('TermsListController', {
      $scope: scope
    });

    $httpBackend.whenGET(TERMS_PATH).respond([{id: 1, name: 'Do it'}]);
    var exp = new RegExp(TERMS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should have an array of terms on the scope', function () {
    expect(angular.isArray(termsListController.terms)).toBeTruthy();
  });


  describe('.saveTerm()', function () {
    it('should call glTermsStore.add()', function () {
      var spy = spyOn(glTermsStore, 'add');
      var term = {
        name: 'Digest',
        definition: 'Process food'
      };

      scope.newTerm = angular.copy(term);

      termsListController.saveTerm();

      expect(spy).toHaveBeenCalled();
    });


    it('should reset the form model when saving a term', function () {
      var originalModel = {name: 'Do the thing', id: 1};
      scope.newTerm = originalModel;

      expect(scope.newTerm).toEqual(originalModel);
      termsListController.saveTerm();

      expect(scope.newTerm).toEqual({});
    });
  });
});
