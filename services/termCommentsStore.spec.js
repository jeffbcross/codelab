'use strict';

describe('termCommentsStore', function () {
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
    it('should be a function', function () {
      expect(typeof glTermCommentsStore.addCommentToTerm).toBe('function');
    });


    it('should POST a new comment when called', function () {
      var responseComment = angular.copy(comment);
      responseComment.id = 'foo';
      responseComment.termid = '1';
      $httpBackend.whenPOST('/comments').respond(responseComment);
      glTermCommentsStore.addCommentToTerm(responseComment.termid, comment);
      $httpBackend.flush();

      expect(glTermCommentsStore.getCommentsForTerm('1')).toEqual([responseComment])
    });
  });


  describe('Comments Resource', function () {
    var Comments;

    beforeEach(inject(function (_$httpBackend_, _Comments_) {
      Comments = _Comments_;
    }));


    it('should load comments for a given term', function () {
      var response = [{text: 'Comment one', date: 1}];
      $httpBackend.whenGET('/comments?termid=1').respond(response);

      var comments = Comments.query({termid: 1});
      $httpBackend.flush();

      expect(comments[0].text).toEqual(response[0].text);
    });
  });
});
