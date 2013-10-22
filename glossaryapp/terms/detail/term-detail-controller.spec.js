describe('TermDetailController', function () {
  'use strict';

  var scope, termsStore, termCommentsStore, termDetailController;

  beforeEach(module('glossaryApp', 'glossaryComment'));

  beforeEach(inject(function ($rootScope, $controller, _termsStore_, _termCommentsStore_) {
    termsStore = _termsStore_;
    termCommentsStore = _termCommentsStore_;
    scope = $rootScope.$new();

    termDetailController = $controller('TermDetailController', {
      $scope: scope,
      $routeParams: {
        id: '1'
      }
    });
  }));


  describe('.addComment()', function () {
    it('should add the comment to termCommentsStore', function () {
      var spy = spyOn(termCommentsStore, 'addCommentToTerm');
      var comment = {text: 'A comment'};

      termDetailController.addComment(comment);

      expect(spy).toHaveBeenCalledWith('1', comment);
    });


    it('should reset scope.newComment to an empty object', function () {
      var comment = termDetailController.newComment = {text: 'A comment'};

      expect(termDetailController.newComment).toBe(comment);
      termDetailController.addComment(comment);

      expect(termDetailController.newComment).toEqual({});
    });
  });
});
