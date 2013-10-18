'use strict';

describe('Comments', function () {
  var Comments, $httpBackend;

  beforeEach(module('todoApp'));

  beforeEach(inject(function (_$httpBackend_, _Comments_) {
    $httpBackend = _$httpBackend_;
    Comments = _Comments_;

  }));


  it('should load comments for a given todo', function () {
    var response = [{text: 'Comment one', date: 1}];
    $httpBackend.whenGET('/comments?todoid=1').respond(response);

    var comments = Comments.query({todoid: 1});
    $httpBackend.flush();

    expect(comments[0].text).toEqual(response[0].text);
  });
});
