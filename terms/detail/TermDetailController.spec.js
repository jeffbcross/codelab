describe('TermDetailController', function () {
  var scope, glTermsStore, glTermCommentsStore, termDetailController;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function ($rootScope, $controller, _glTermsStore_, _glTermCommentsStore_) {
    glTermsStore = _glTermsStore_;
    glTermCommentsStore = _glTermCommentsStore_;
    scope = $rootScope.$new();

    termDetailController = $controller('TermDetailController', {
      $scope: scope,
      $routeParams: {
        id: '1'
      }
    });
  }));


  describe('.addComment()', function () {
    it('should add the comment to glTermCommentsStore', function () {
      var spy = spyOn(glTermCommentsStore, 'addCommentToTerm');
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
