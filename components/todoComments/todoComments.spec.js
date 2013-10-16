describe('todoComments', function () {
  var $rootScope, $compile, $httpBackend,
      comments = [{
          text: 'Started work',
          date: 1
        },
        {
          text: 'Almost done',
          date: 2
        }],
      sampleTodo = {
        text: 'Do it',
        done: true,
        id: '1'
      };

  beforeEach(module('todos', 'components/todoComments/todo-comments.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend.whenGET('/comments?todoid=1').respond(comments);
  }));


  it('should render a comment for each comment on a provided todo', function () {
    $rootScope.todo = sampleTodo;
    var element = $compile('<td-todo-comments todo-id="todo.id"></td-todo-comments>')($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();

    expect(element.find('ul').children().length).toBe(2);
  });


  it('should sort the comments by most recent comments first', function () {
    $rootScope.todo = sampleTodo;
    var element = $compile('<td-todo-comments todo-id="todo.id"></td-todo-comments>')($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();

    expect(angular.element(element.find('ul').children()[0]).text()).toContain('Almost done');
  });
})