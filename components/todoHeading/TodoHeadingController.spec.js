'use strict';

describe('TodoHeadingController', function () {
  var $controller, $rootScope, scope, tdTodosStore;

  beforeEach(module('todos'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _tdTodosStore_, $httpBackend) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    tdTodosStore = _tdTodosStore_;

    $httpBackend.whenGET('/todos').respond(200);

    scope = $rootScope.$new();
  }));


  describe('.updateHeading()', function () {
    it('should be a function', function () {
      var controller = $controller('TodoHeadingController', {
        $scope: scope
      });

      expect(typeof scope.updateHeading).toBe('function');
    });


    it('should call tdTodosStore.updateById', function () {
      var todo = {text: 'Do This', done: false, id: '1'};
      var spy = spyOn(tdTodosStore, 'updateById');
      scope.todoId = '1';
      var controller = $controller('TodoHeadingController', {
        $scope: scope
      });

      scope.updateHeading(todo);
      expect(spy).toHaveBeenCalledWith('1', todo);
    });
  });


  describe('$watch(todo.done)', function () {
    it('should call tdTodosStore.updateById when the done value changes', function () {
      var todo = scope.todo =  {text: 'Do This', done: false, id: '1'};
      var spy = spyOn(tdTodosStore, 'updateById');
      scope.todoId = '1';


      var controller = $controller('TodoHeadingController', {
        $scope: scope
      });
      scope.$digest();

      expect(spy).not.toHaveBeenCalled();

      todo.done = !todo.done;
      scope.$digest();

      expect(spy).toHaveBeenCalled();
    });
  });
});
