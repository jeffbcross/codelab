describe('TodoDetailController', function () {
  var scope, tdTodosStore, todoDetailController;

  beforeEach(module('todos'));

  beforeEach(inject(function ($rootScope, $controller, _tdTodosStore_) {
    tdTodosStore = _tdTodosStore_;
    scope = $rootScope.$new();
    todoDetailController = $controller('TodoDetailController', {
      $scope: scope
    });


  }));

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
