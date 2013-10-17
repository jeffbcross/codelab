'use strict';

describe('CreateTodoController', function () {
  var $controller, $rootScope, scope, tdTodosStore;

  beforeEach(module('todos'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _tdTodosStore_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    tdTodosStore = _tdTodosStore_;

    scope = $rootScope.$new();
  }));


  describe('.saveTodo()', function () {
    it('should be a function', function () {
      var controller = $controller('CreateTodoController', {
        $scope: scope
      });

      expect(typeof scope.saveTodo).toBe('function');
    });


    it('should call tdTodosStore.add()', function () {
      var spy = spyOn(tdTodosStore, 'add');
      var todo = {
        text: 'Do this',
        done: false
      };
      scope.newTodo = angular.copy(todo);

      var controller = $controller('CreateTodoController', {
        $scope: scope
      });

      scope.saveTodo();

      expect(spy).toHaveBeenCalledWith(todo);
    });
  });
});
