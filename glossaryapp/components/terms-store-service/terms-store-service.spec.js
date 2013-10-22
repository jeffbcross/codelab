describe('termsStore', function () {
  'use strict';

  var glTermsStore,
      resourceSpy,
      $httpBackend,
      Term;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function (_glTermsStore_, _$httpBackend_, _Term_, TERMS_PATH) {
    glTermsStore = _glTermsStore_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TERMS_PATH).respond(200);
    $httpBackend.whenPUT(TERMS_PATH + '/1').respond({name: 'Terminology', definition: 'The study of terms.' });
    Term = _Term_;
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
      var spy = spyOn(Term, 'update');

      glTermsStore.updateById('1', termCopy);

      expect(spy).toHaveBeenCalled();
    });
  });
});
