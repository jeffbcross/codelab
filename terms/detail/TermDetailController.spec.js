describe('TermDetailController', function () {
  var scope, tdTermsStore, tdTermCommentsStore, termDetailController;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($rootScope, $controller, _tdTermsStore_, _tdTermCommentsStore_) {
    tdTermsStore = _tdTermsStore_;
    tdTermCommentsStore = _tdTermCommentsStore_;
    scope = $rootScope.$new();

    termDetailController = $controller('TermDetailController', {
      $scope: scope,
      $routeParams: {
        id: '1'
      }
    });
  }));


  describe('.addComment()', function () {
    it('should add the comment to tdTermCommentsStore', function () {
      var spy = spyOn(tdTermCommentsStore, 'addCommentToTerm');
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


  describe('.updateHeading()', function () {
    it('should call tdTermsStore.updateById', function () {
      var term = {text: 'Do This', id: '1'};
      var spy = spyOn(tdTermsStore, 'updateById');

      termDetailController.updateHeading(term);
      expect(spy).toHaveBeenCalledWith('1', term);
    });
  });
});
