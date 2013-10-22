describe('termsStore', function () {
  'use strict';

  var glTermsStore,
      resourceSpy,
      $httpBackend,
      glTerm;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function (_glTermsStore_, _$httpBackend_, _glTerm_, TERMS_PATH) {
    glTermsStore = _glTermsStore_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TERMS_PATH).respond(200);
    $httpBackend.whenPUT(TERMS_PATH + '/1').respond({name: 'Terminology', definition: 'The study of terms.' });
    glTerm = _glTerm_;
  }));


  it('should have an array of terms', function () {
    expect(angular.isArray(glTermsStore.terms)).toBe(true);
  });


  describe('.add()', function () {
    it('should add the term to the service\'s terms array',
      function () {
        var newTerm = {name: 'Do it', definition: 'The doing of things', id: 0};
        var spy = spyOn(glTermsStore.terms, 'push');
        glTermsStore.add(newTerm);

        expect(spy).toHaveBeenCalled();
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
      var spy = spyOn(glTerm, 'update');

      glTermsStore.updateById('1', termCopy);

      expect(spy).toHaveBeenCalled();
    });
  });


  describe('Term', function () {
    var glTerm, TERMS_PATH;

    beforeEach(inject(function (_glTerm_, _TERMS_PATH_) {
      TERMS_PATH = _TERMS_PATH_;
      glTerm = _glTerm_;
    }));


    it('should exist', function () {
      expect(!!glTerm).toBe(true);
    });


    it('should have a query method', function () {
      expect(typeof glTerm.query).toBe('function');
    });


    it('should have an update method', function () {
      expect(typeof glTerm.update).toBe('function');
    });


    it('should try to update an item when calling update', function () {
      var spyable = {
        success: function (data, headers) {}
      };
      var spy = spyOn(spyable, 'success');

      $httpBackend.whenPUT(TERMS_PATH + '/1').respond(200);

      glTerm.update({id: 1}, {text: 'Do it'}, spyable.success);
      $httpBackend.flush();

      expect(spy).toHaveBeenCalled();
    });
  });
});
