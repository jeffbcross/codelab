describe('TermDetailController', function () {
  var scope, tdTodosStore, tdTodoCommentsStore, termDetailController;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($rootScope, $controller, _tdTodosStore_, _tdTodoCommentsStore_) {
    tdTodosStore = _tdTodosStore_;
    tdTodoCommentsStore = _tdTodoCommentsStore_;
    scope = $rootScope.$new();

    termDetailController = $controller('TermDetailController', {
      $scope: scope,
      $routeParams: {
        id: '1'
      }
    });


  }));


  describe('.addComment()', function () {
    it('should add the comment to tdTodoCommentsStore', function () {
      var spy = spyOn(tdTodoCommentsStore, 'addCommentToTodo');
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
    it('should call tdTodosStore.updateById', function () {
      var term = {text: 'Do This', done: false, id: '1'};
      var spy = spyOn(tdTodosStore, 'updateById');

      termDetailController.updateHeading(term);
      expect(spy).toHaveBeenCalledWith('1', term);
    });
  });
});
