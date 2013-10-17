'use strict';

describe('Todo', function () {
  var Todo, $httpBackend, TODOS_PATH;

  beforeEach(module('todos'));

  beforeEach(inject(function (_$httpBackend_, _Todo_, _TODOS_PATH_) {
    TODOS_PATH = _TODOS_PATH_;
    Todo = _Todo_;
    $httpBackend = _$httpBackend_;
  }));


  it('should exist', function () {
    expect(!!Todo).toBe(true);
  });


  it('should have a query method', function () {
    expect(typeof Todo.query).toBe('function');
  });


  it('should have an update method', function () {
    expect(typeof Todo.update).toBe('function');
  });


  it('should try to update an item when calling update', function () {
    var spyable = {
      success: function (data, headers) {}
    };
    var spy = spyOn(spyable, 'success');

    $httpBackend.whenPUT(TODOS_PATH + '/1').respond(200);

    Todo.update({id: 1}, {done: true, text: 'Do it'}, spyable.success);
    $httpBackend.flush();

    expect(spy).toHaveBeenCalled();
  });
});
