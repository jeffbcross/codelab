describe('TodoDetailController', function () {
  var scope, tdTodosStore, tdTodoCommentsStore, todoDetailController;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($rootScope, $controller, _tdTodosStore_, _tdTodoCommentsStore_) {
    tdTodosStore = _tdTodosStore_;
    tdTodoCommentsStore = _tdTodoCommentsStore_;
    scope = $rootScope.$new();
    todoDetailController = $controller('TodoDetailController', {
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

      todoDetailController.addComment(comment);

      expect(spy).toHaveBeenCalledWith('1', comment);
    });


    it('should reset scope.newComment to an empty object', function () {
      var comment = todoDetailController.newComment = {text: 'A comment'};

      expect(todoDetailController.newComment).toBe(comment);
      todoDetailController.addComment(comment);

      expect(todoDetailController.newComment).toEqual({});
    });
  });


  describe('.updateHeading()', function () {
    it('should call tdTodosStore.updateById', function () {
      var todo = {text: 'Do This', done: false, id: '1'};
      var spy = spyOn(tdTodosStore, 'updateById');
      scope.todoId = '1';


      todoDetailController.updateHeading(todo);
      expect(spy).toHaveBeenCalledWith('1', todo);
    });
  });
});
