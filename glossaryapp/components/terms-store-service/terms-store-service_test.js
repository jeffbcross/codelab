describe('termsStoreService', function () {
  'use strict';

  beforeEach(module('termsStoreService', 'glossaryApp', 'termResource'));


  describe('termsStore', function () {
    var termsStore, resourceSpy, $httpBackend, Term;

    beforeEach(inject(function (_termsStore_, _$httpBackend_, _Term_, TERMS_PATH) {
      termsStore = _termsStore_;
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET(TERMS_PATH).respond(200);
      $httpBackend.whenPUT(TERMS_PATH + '/1').respond({name: 'Terminology', definition: 'The study of terms.' });
      Term = _Term_;
    }));


    it('should have an array of terms', function () {
      expect(angular.isArray(termsStore.terms)).toBe(true);
    });


    describe('.add()', function () {
      it('should add the term to the service\'s terms array',
        function () {
          var newTerm = {name: 'Do it', definition: 'The doing of things', id: 0};
          var spy = spyOn(termsStore.terms, 'push');
          termsStore.add(newTerm);

          expect(spy).toHaveBeenCalled();
        });
    });


    describe('.updateById()', function () {
      var term, termCopy;

      beforeEach(function () {
        term = {id: '1', text: 'Do it'};
        termsStore.terms = [term];

        termCopy = angular.copy(term);
      });


      it('should update the term in the list', function () {
        termsStore.updateById('1', termCopy);
        $httpBackend.flush();

        expect(termsStore.terms[0]).toEqual(termCopy);
      });


      it('should save the term to the server', function () {
        var spy = spyOn(Term, 'update');

        termsStore.updateById('1', termCopy);

        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
