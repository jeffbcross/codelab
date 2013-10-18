'use strict';

describe('todoCommentsStore', function () {
  var tdTodoCommentsStore, $httpBackend,
      comment = {text: 'A comment', date: 1};

  beforeEach(module('todoApp'));

  beforeEach(inject(function (_tdTodoCommentsStore_, _$httpBackend_) {
    tdTodoCommentsStore = _tdTodoCommentsStore_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function () {
    expect(!!tdTodoCommentsStore).toBe(true);
  });


  describe('.getCommentsForTodo()', function () {
    it('should return the comments for a given todo', function () {
      tdTodoCommentsStore.mapTodoComments['foo'] = [comment];

      var comments = tdTodoCommentsStore.getCommentsForTodo('foo');
      expect(comments).toEqual([comment]);
    });
  });


  describe('.addCommentToTodo()', function () {
    it('should be a function', function () {
      expect(typeof tdTodoCommentsStore.addCommentToTodo).toBe('function');
    });


    it('should POST a new comment when called', function () {
      var responseComment = angular.copy(comment);
      responseComment.id = 'foo';
      responseComment.todoid = '1';
      $httpBackend.whenPOST('/comments').respond(responseComment);
      tdTodoCommentsStore.addCommentToTodo(responseComment.todoid, comment);
      $httpBackend.flush();

      expect(tdTodoCommentsStore.getCommentsForTodo('1')).toEqual([responseComment])
    });
  });


  describe('Comments Resource', function () {
    var Comments;

    beforeEach(inject(function (_$httpBackend_, _Comments_) {
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

});