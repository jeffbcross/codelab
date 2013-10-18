'use strict';

describe('todosStore', function () {
  var tdTermsStore,
      resourceSpy,
      $httpBackend,
      Term;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function (_tdTermsStore_, _$httpBackend_, _Term_, TODOS_PATH) {
    tdTermsStore = _tdTermsStore_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TODOS_PATH).respond(200);
    $httpBackend.whenPUT(TODOS_PATH + '/1').respond(200);
    Term = _Term_;
  }));


  it('should exist', function () {
    expect(!!tdTermsStore).toBe(true);
  });


  it('should have an array of terms', function () {
    expect(angular.isArray(tdTermsStore.terms)).toBe(true);
  });


  describe('.add()', function () {
    it('should provide a method to add a single todo',
      function () {
        expect(typeof tdTermsStore.add).toBe('function');
      });


    it('should add the term to the service\'s terms array',
      function () {
        var newTerm = {name: 'Do it', id: 0};
        var spy = spyOn(tdTermsStore.terms, 'push');
        tdTermsStore.add(newTerm);

        expect(spy).toHaveBeenCalledWith(newTerm);
      });
  });


  describe('.updateById()', function () {
    var term, termCopy;

    beforeEach(function () {
      term = {id: '1', text: 'Do it'};
      tdTermsStore.terms = [term];

      termCopy = angular.copy(term);
    });


    it('should update the term in the list', function () {

      tdTermsStore.updateById('1', termCopy);
      $httpBackend.flush();

      expect(tdTermsStore.terms[0]).toEqual(termCopy);
    });


    it('should save the term to the server', function () {
      var spy = spyOn(Term, 'update');

      tdTermsStore.updateById('1', termCopy);

      expect(spy).toHaveBeenCalled();
    });
  });


  describe('Term', function () {
    var Term, TODOS_PATH;

    beforeEach(inject(function (_$httpBackend_, _Term_, _TODOS_PATH_) {
      TODOS_PATH = _TODOS_PATH_;
      Term = _Term_;
    }));


    it('should exist', function () {
      expect(!!Term).toBe(true);
    });


    it('should have a query method', function () {
      expect(typeof Term.query).toBe('function');
    });


    it('should have an update method', function () {
      expect(typeof Term.update).toBe('function');
    });


    it('should try to update an item when calling update', function () {
      var spyable = {
        success: function (data, headers) {}
      };
      var spy = spyOn(spyable, 'success');

      $httpBackend.whenPUT(TODOS_PATH + '/1').respond(200);

      Term.update({id: 1}, {text: 'Do it'}, spyable.success);
      $httpBackend.flush();

      expect(spy).toHaveBeenCalled();
    });
  });


  describe('mapById', function () {
    var mapById;

    beforeEach(inject(function ($filter) {
      mapById = $filter('tdMapById');
    }));


    describe('.map()', function () {
      it('should return a map of ids to todos', function () {
        var term1 = {
          text: 'Do it',
          id: '0'
        };
        var term2 = {
          text: 'Done',
          id: '1'
        };
        var todoArray = [term1, term2];

        expect(mapById(todoArray)).toEqual({0: term1, 1: term2});
      });
    });
  });

});
