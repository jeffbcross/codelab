describe('termCommentsStore', function () {
  'use strict';
  var glTermCommentsStore, $httpBackend,
      comment = {text: 'A comment', date: 1};

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function (_glTermCommentsStore_, _$httpBackend_) {
    glTermCommentsStore = _glTermCommentsStore_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function () {
    expect(!!glTermCommentsStore).toBe(true);
  });


  describe('.getCommentsForTerm()', function () {
    it('should return the comments for a given term', function () {
      glTermCommentsStore.mapTermComments['foo'] = [comment];

      var comments = glTermCommentsStore.getCommentsForTerm('foo');
      expect(comments).toEqual([comment]);
    });
  });


  describe('.addCommentToTerm()', function () {
    it('should POST a new comment when called', function () {
      var responseComment = angular.copy(comment);
      responseComment.id = 'foo';
      responseComment.termid = '1';
      $httpBackend.whenPOST('/api/terms/comments').respond(responseComment);
      glTermCommentsStore.addCommentToTerm(responseComment.termid, comment);
      $httpBackend.flush();

      var comments = glTermCommentsStore.getCommentsForTerm('1');

      expect(comments[0].name).toBe(responseComment.name);
      expect(comments[0].createdTimestamp).toBeGreaterThan(0);
    });
  });


  describe('glComment Resource', function () {
    var glComment;

    beforeEach(inject(function (_$httpBackend_, _glComment_) {
      glComment = _glComment_;
    }));


    it('should load comments for a given term', function () {
      var response = [{text: 'Comment one', date: 1}];
      $httpBackend.whenGET('/api/terms/comments?termid=1').respond(response);

      var comments = glComment.query({termid: 1});
      $httpBackend.flush();

      expect(comments[0].text).toEqual(response[0].text);
    });
  });
});
