'use strict';

describe('todosStore', function () {
  var tdTodosStore,
      resourceSpy,
      $httpBackend,
      Todo;

  beforeEach(module('todoApp'));

  beforeEach(inject(function (_tdTodosStore_, _$httpBackend_, _Todo_) {
    tdTodosStore = _tdTodosStore_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('/todos').respond(200);
    Todo = _Todo_;
  }));


  it('should exist', function () {
    expect(!!tdTodosStore).toBe(true);
  });


  it('should have an array of todos', function () {
    expect(angular.isArray(tdTodosStore.todos)).toBe(true);
  });


  describe('.add()', function () {
    it('should provide a method to add a single todo',
      function () {
        expect(typeof tdTodosStore.add).toBe('function');
      });


    it('should add the todo to the service\'s todos array',
      function () {
        var newTodo = {done: true, text: 'Do it', id: 0};
        var spy = spyOn(tdTodosStore.todos, 'push');
        tdTodosStore.add(newTodo);

        expect(spy).toHaveBeenCalledWith(newTodo);
      });
  });


  describe('.updateById()', function () {
    var todo, todoCopy;

    beforeEach(function () {
      todo = {id: '1', done: false, text: 'Do it'};
      $httpBackend.whenPUT('/todos/1').respond(200);
      tdTodosStore.todos = [todo];

      todoCopy = angular.copy(todo);
      todoCopy.done = !todoCopy.done;
    });


    it('should update the todo in the list', function () {

      tdTodosStore.updateById('1', todoCopy);
      $httpBackend.flush();

      expect(tdTodosStore.todos[0]).toEqual(todoCopy);
    });


    it('should save the todo to the server', function () {
      var spy = spyOn(Todo, 'update');

      tdTodosStore.updateById('1', todoCopy);

      expect(spy).toHaveBeenCalled();
    });
  });
});
