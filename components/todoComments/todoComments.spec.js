describe('todoComments', function () {
  var $rootScope, $compile,
      sampleTodo = {
        text: 'Do it',
        done: true, id: '1',
        comments: [{
          text: 'Started work',
          date: 1
        },
        {
          text: 'Almost done',
          date: 2
        }]};

  beforeEach(module('todos', 'components/todoComments/todo-comments.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));


  it('should render a comment for each comment on a provided todo', function () {
    $rootScope.todo = sampleTodo;
    var element = $compile('<td-todo-comments todo="todo"></td-todo-comments>')($rootScope);
    $rootScope.$digest();

    expect(element.find('ul').children().length).toBe(2);
  });


  it('should sort the comments by most recent comments first', function () {
    $rootScope.todo = sampleTodo;
    var element = $compile('<td-todo-comments todo="todo"></td-todo-comments>')($rootScope);
    $rootScope.$digest();

    expect(angular.element(element.find('ul').children()[0]).text()).toContain('Almost done');
  });
})