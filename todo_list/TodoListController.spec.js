'use strict';

describe('TodoListController', function () {
  var todoListController, Todo, scope, tdTodosStore;

  beforeEach(module('todos'));

  beforeEach(inject(function ($controller, $rootScope, _Todo_, $httpBackend, TODOS_PATH, _tdTodosStore_) {
    scope = $rootScope.$new();
    Todo = _Todo_;
    tdTodosStore = _tdTodosStore_;
    todoListController = $controller('TodoListController', {
      $scope: scope
    });

    $httpBackend.whenGET(TODOS_PATH).respond([{done: false, id: 1, text: 'Do it'}]);
    var exp = new RegExp(TODOS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should have an array of todos on the scope', function () {
    expect(angular.isArray(todoListController.todos)).toBeTruthy();
  });


  describe('.saveTodo()', function () {
    it('should call tdTodosStore.add()', function () {
      var spy = spyOn(tdTodosStore, 'add');
      var todo = {
        text: 'Do this',
        done: false
      };

      scope.newTodo = angular.copy(todo);

      todoListController.saveTodo();

      expect(spy).toHaveBeenCalledWith(todo);
    });


    it('should reset the form model when saving a todo', function () {
      var originalModel = {done: false, text: 'Do the thing', id: 1};
      scope.newTodo = originalModel;

      expect(scope.newTodo).toEqual(originalModel);
      todoListController.saveTodo();

      expect(scope.newTodo).toEqual({});
    });
  });


  describe('.todoChanged()', function () {
    it('should call Todo.update with the correct todo', function () {
      var spy = spyOn(Todo, 'update');
      var todo = {done: false, text: 'Do it once', id: '0'};

      todoListController.todoChanged(todo);

      expect(spy).toHaveBeenCalledWith({id: '0'}, todo);
    });
  });
});
