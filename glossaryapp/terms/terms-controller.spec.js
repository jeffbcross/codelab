describe('TermsController', function () {
  'use strict';

  var termsController, scope, termsStore;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, TERMS_PATH, _termsStore_) {
    scope = $rootScope.$new();

    termsStore = _termsStore_;
    termsController = $controller('TermsController', {
      $scope: scope
    });

    $httpBackend.whenGET(TERMS_PATH).respond([{id: 1, name: 'Do it'}]);
    var exp = new RegExp(TERMS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should have an array of terms on the scope', function () {
    expect(angular.isArray(termsController.terms)).toBeTruthy();
  });


  describe('.saveTerm()', function () {
    it('should call termsStore.add()', function () {
      var spy = spyOn(termsStore, 'add');
      var term = {
        name: 'Digest',
        definition: 'Process food'
      };

      scope.newTerm = angular.copy(term);

      termsController.saveTerm();

      expect(spy).toHaveBeenCalled();
    });


    it('should reset the form model when saving a term', function () {
      var originalModel = {name: 'Do the thing', id: 1};
      scope.newTerm = originalModel;

      expect(scope.newTerm).toEqual(originalModel);
      termsController.saveTerm();

      expect(scope.newTerm).toEqual({});
    });
  });
});
