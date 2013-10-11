describe('TodoListController', function () {
  var TodoListController;

  beforeEach(module('todos'));

  it('should exist', function () {
    var exp = !!TodoListController;
    expect(exp).toBe(true);
  });
});
