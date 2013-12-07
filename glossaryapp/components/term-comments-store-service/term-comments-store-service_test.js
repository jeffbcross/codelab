describe('termCommentsStoreService', function () {
  'use strict';

  beforeEach(module('termCommentsStoreService', 'commentResource'));


  describe('termCommentsStore', function () {
    var termCommentsStore, $httpBackend,
      comment = {text: 'A comment', date: 1};

    beforeEach(inject(function (_termCommentsStore_, _$httpBackend_) {
      termCommentsStore = _termCommentsStore_;
      $httpBackend = _$httpBackend_;
    }));

    it('should exist', function () {
      expect(!!termCommentsStore).toBe(true);
    });


    describe('.getCommentsForTerm()', function () {
      it('should return the comments for a given term', function () {
        termCommentsStore.mapTermComments['foo'] = [comment];

        var comments = termCommentsStore.getCommentsForTerm('foo');
        expect(comments).toEqual([comment]);
      });
    });


    describe('.addCommentToTerm()', function () {
      it('should POST a new comment when called', function () {
        var responseComment = angular.copy(comment);
        responseComment.id = 'foo';
        responseComment.termid = '1';
        $httpBackend.whenPOST('/api/terms/1/comments').respond(responseComment);
        termCommentsStore.addCommentToTerm(responseComment.termid, comment);
        $httpBackend.flush();

        var comments = termCommentsStore.getCommentsForTerm('1');

        expect(comments[0].name).toBe(responseComment.name);
        expect(comments[0].createdTimestamp).toBeGreaterThan(0);
      });
    });
  });
});
