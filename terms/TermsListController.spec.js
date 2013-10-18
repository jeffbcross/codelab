'use strict';

describe('TermsListController', function () {
  var termsListController, scope, tdTermsStore;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, TODOS_PATH, _tdTermsStore_) {
    scope = $rootScope.$new();

    tdTermsStore = _tdTermsStore_;
    termsListController = $controller('TermsListController', {
      $scope: scope
    });

    $httpBackend.whenGET(TODOS_PATH).respond([{id: 1, text: 'Do it'}]);
    var exp = new RegExp(TODOS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should have an array of todos on the scope', function () {
    expect(angular.isArray(termsListController.terms)).toBeTruthy();
  });


  describe('.saveTerm()', function () {
    it('should call tdTermsStore.add()', function () {
      var spy = spyOn(tdTermsStore, 'add');
      var todo = {
        text: 'Do this'
      };

      scope.newTerm = angular.copy(todo);

      termsListController.saveTerm();

      expect(spy).toHaveBeenCalledWith(todo);
    });


    it('should reset the form model when saving a todo', function () {
      var originalModel = {text: 'Do the thing', id: 1};
      scope.newTerm = originalModel;

      expect(scope.newTerm).toEqual(originalModel);
      termsListController.saveTerm();

      expect(scope.newTerm).toEqual({});
    });
  });
});
