'use strict';

describe('termsStore', function () {
  var glTermsStore,
      resourceSpy,
      $httpBackend,
      Term;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function (_glTermsStore_, _$httpBackend_, _Term_, TERMS_PATH) {
    glTermsStore = _glTermsStore_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TERMS_PATH).respond(200);
    $httpBackend.whenPUT(TERMS_PATH + '/1').respond(200);
    Term = _Term_;
  }));


  it('should exist', function () {
    expect(!!glTermsStore).toBe(true);
  });


  it('should have an array of terms', function () {
    expect(angular.isArray(glTermsStore.terms)).toBe(true);
  });


  describe('.add()', function () {
    it('should provide a method to add a single term',
      function () {
        expect(typeof glTermsStore.add).toBe('function');
      });


    it('should add the term to the service\'s terms array',
      function () {
        var newTerm = {name: 'Do it', id: 0};
        var spy = spyOn(glTermsStore.terms, 'push');
        glTermsStore.add(newTerm);

        expect(spy).toHaveBeenCalledWith(newTerm);
      });
  });


  describe('.updateById()', function () {
    var term, termCopy;

    beforeEach(function () {
      term = {id: '1', text: 'Do it'};
      glTermsStore.terms = [term];

      termCopy = angular.copy(term);
    });


    it('should update the term in the list', function () {

      glTermsStore.updateById('1', termCopy);
      $httpBackend.flush();

      expect(glTermsStore.terms[0]).toEqual(termCopy);
    });


    it('should save the term to the server', function () {
      var spy = spyOn(Term, 'update');

      glTermsStore.updateById('1', termCopy);

      expect(spy).toHaveBeenCalled();
    });
  });


  describe('Term', function () {
    var Term, TERMS_PATH;

    beforeEach(inject(function (_$httpBackend_, _Term_, _TERMS_PATH_) {
      TERMS_PATH = _TERMS_PATH_;
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

      $httpBackend.whenPUT(TERMS_PATH + '/1').respond(200);

      Term.update({id: 1}, {text: 'Do it'}, spyable.success);
      $httpBackend.flush();

      expect(spy).toHaveBeenCalled();
    });
  });


  describe('mapById', function () {
    var mapById;

    beforeEach(inject(function ($filter) {
      mapById = $filter('glMapById');
    }));


    describe('.map()', function () {
      it('should return a map of ids to terms', function () {
        var term1 = {
          name: 'Digest',
          definition: 'It processes food',
          id: '0'
        };
        var term2 = {
          name: 'Transclusion',
          definition: 'It is magical',
          id: '1'
        };
        var termArray = [term1, term2];

        expect(mapById(termArray)).toEqual({0: term1, 1: term2});
      });
    });
  });

});
