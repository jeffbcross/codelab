describe('AddCommentController', function () {
  var $controller, $rootScope, scope, tdTodoCommentsStore;

  beforeEach(module('todos'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _tdTodoCommentsStore_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    tdTodoCommentsStore = _tdTodoCommentsStore_;
    scope = $rootScope.$new();
  }));


  it('should exist', function () {
    expect(typeof $controller('AddCommentController', {
      $scope: scope
    })).toBe('object');
  });


  describe('.addComment()', function () {
    it('should be a function', function () {
      var controller = $controller('AddCommentController', {
        $scope: scope
      });

      expect(typeof scope.addComment).toBe('function');
    });


    it('should add the comment to tdTodoCommentsStore', function () {
      var spy = spyOn(tdTodoCommentsStore, 'addCommentToTodo');
      var comment = {text: 'A comment'};
      var controller = $controller('AddCommentController', {
        $scope: scope
      });

      scope.addComment('1', comment);

      expect(spy).toHaveBeenCalledWith('1', comment);
    });


    it('should reset scope.newComment to an empty object', function () {
      var comment = scope.newComment = {text: 'A comment'};
      var controller = $controller('AddCommentController', {
        $scope: scope
      });

      expect(scope.newComment).toBe(comment);
      scope.addComment('1', comment);

      expect(scope.newComment).toEqual({});
    });
  });
});