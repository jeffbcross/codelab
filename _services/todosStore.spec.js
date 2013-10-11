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


  it('should provide a method to add a single todo', function () {
    expect(typeof tdTodosStore.add).toBe('function');
  });


});
