describe('Todo', function () {
  var Todo, $httpBackend;

  beforeEach(module('todos'));

  beforeEach(inject(function (_$httpBackend_, _Todo_) {
    Todo = _Todo_;
  }));

  it('should exist', function () {
    expect(!!Todo).toBe(true);
  });


  it('should have a query method', function () {
    expect(typeof Todo.query).toBe('function');
  });


  it('should return a promise when calling query', function () {
    var response = [{text: 'Do this', done: false}];
    $httpBackend.whenGET('/temp/todos.json').respond(response);
    var todos = Todo.query();
    $httpBackend.flush();
    expect(todos).toBe(response);
  });
});
