describe('Comment Resource', function () {
  'use strict';

  var Comment, $httpBackend;

  beforeEach(module('commentResource'));

  beforeEach(inject(function (_$httpBackend_, _Comment_) {
    $httpBackend = _$httpBackend_;
    Comment = _Comment_;
  }));


  it('should load comments for a given term', function () {
    var response = [{text: 'Comment one', date: 1}];
    $httpBackend.whenGET('/api/terms/comments?termid=1').respond(response);

    var comments = Comment.query({termid: 1});
    $httpBackend.flush();

    expect(comments[0].text).toEqual(response[0].text);
  });
});