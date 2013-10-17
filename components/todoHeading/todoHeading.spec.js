describe('todoHeading', function () {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('todos', 'components/todoHeading/todo-heading.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));


  it('should populate the heading with the todo text', function () {
    var todo = {text: 'Todo Text', done: false, id: '1'};
    $httpBackend.whenGET('/todos/1').respond(todo);
    $httpBackend.whenGET('/todos').respond(200);

    var element = $compile('<td-todo-heading todo-id="1"></td-todo-heading>')($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();

    expect(element.find('form').find('input').val()).toBe('Todo Text');
  });
});