'use strict';

describe('TodosStore', function () {
  var tdTodosStore,
      resourceSpy;

  beforeEach(module('todos'));

  beforeEach(inject(function (_tdTodosStore_) {
    tdTodosStore = _tdTodosStore_;
  }));


  it('should exist', function () {
    expect(!!tdTodosStore).toBe(true);
  });


  describe('.add()', function () {
    it('should provide a method to add a single todo', function () {
      expect(typeof tdTodosStore.add).toBe('function');
    });


    it('should add the todo to the service\'s todos array', function () {
      var newTodo = {done: true, text: 'Do it', id: 0};
      var spy = spyOn(tdTodosStore.todos, 'push');
      tdTodosStore.add(newTodo);

      expect(spy).toHaveBeenCalledWith(newTodo);
    });
  });
});
