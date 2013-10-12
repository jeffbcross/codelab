'use strict';

describe('TodoListController', function () {
  var TodoListController, Todo, scope;

  beforeEach(module('todos'));

  beforeEach(inject(function ($controller, $rootScope, _Todo_, $httpBackend, TODOS_PATH) {
    scope = $rootScope.$new();
    Todo = _Todo_;
    TodoListController = $controller('TodoListController', {
      $scope: scope
    });

    $httpBackend.whenGET(TODOS_PATH).respond([{done: false, id: 1, text: 'Do it'}]);
    var exp = new RegExp(TODOS_PATH + '\/[0-9]*');
    $httpBackend.whenPUT(exp).respond(200);
  }));


  it('should exist', function () {
    expect(!!TodoListController).toBe(true);
  });


  it('should call updateChangedTodo when a todo\'s done is toggled', function () {
    var spy = spyOn(Todo, 'update');
    var todo = {done: false, text: 'Do it', id: 0};
    scope.todos.push(todo);
    scope.$digest();

    expect(scope.todos.length).toBe(1);
    todo.done = true;
    scope.$digest();

    expect(spy).toHaveBeenCalledWith({id: 0}, todo);
  });


  describe('.updateChangedTodo()', function () {
    it('should exist', function () {
      expect(typeof TodoListController.updateChangedTodo).toBe('function');
    });


    it('should call Todo.update with the correct todo', function () {
      var spy = spyOn(Todo, 'update');
      var todo1 = {done: false, text: 'Do it once', id: 0};
      var todo2 = {done: true, text: 'Do it twice', id: 1};
      var todo1Done = angular.copy(todo1);
      todo1Done.done = true;

      expect(todo1.done).toBe(false);
      expect(todo1Done.done).toBe(true);

      TodoListController.updateChangedTodo([todo1Done, todo2], [todo1, todo2]);

      expect(spy).toHaveBeenCalledWith({id: 0}, todo1Done);
    });
  });


  describe('.map()', function () {
    it('should exist', function () {
      expect(typeof TodoListController.map).toBe('function');
    });


    it('should return a map of ids to todos', function () {
      var todo1 = {
        done: false,
        text: 'Do it',
        id: 0
      };
      var todo2 = {
        done: true,
        text: 'Done',
        id: 1
      };
      var todoArray = [todo1, todo2];

      expect(TodoListController.map(todoArray)).toEqual({0: todo1, 1: todo2});
    });
  });
});
