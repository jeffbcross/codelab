'use strict';

describe('TermsListController', function () {
  var termsListController, Todo, scope, tdTodosStore;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($controller, $rootScope, _Todo_, $httpBackend, TODOS_PATH, _tdTodosStore_) {
    scope = $rootScope.$new();
    Todo = _Todo_;
    tdTodosStore = _tdTodosStore_;
    termsListController = $controller('TermsListController', {
      $scope: scope
    });

    $httpBackend.whenGET(TODOS_PATH).respond([{done: false, id: 1, text: 'Do it'}]);
    var exp = new RegExp(TODOS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should have an array of todos on the scope', function () {
    expect(angular.isArray(termsListController.terms)).toBeTruthy();
  });


  describe('.saveTerm()', function () {
    it('should call tdTodosStore.add()', function () {
      var spy = spyOn(tdTodosStore, 'add');
      var todo = {
        text: 'Do this',
        done: false
      };

      scope.newTerm = angular.copy(todo);

      termsListController.saveTerm();

      expect(spy).toHaveBeenCalledWith(todo);
    });


    it('should reset the form model when saving a todo', function () {
      var originalModel = {done: false, text: 'Do the thing', id: 1};
      scope.newTerm = originalModel;

      expect(scope.newTerm).toEqual(originalModel);
      termsListController.saveTerm();

      expect(scope.newTerm).toEqual({});
    });
  });
});
