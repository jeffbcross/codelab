'use strict';

describe('tdTodoList', function () {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('todos', 'components/todoList/todoList.html'));

  beforeEach(inject( function (_$compile_, _$rootScope_, _$httpBackend_, TODOS_PATH) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TODOS_PATH).respond('[]');
  }));


  it('should render an li for each todo in the parent scope', function () {
    $rootScope.todos = [{done: false, text: 'Do this', id: 1}, {done: true, text: 'Do that', id: 2}];

    var template = $compile('<td-todo-list todos="todos"></td-todo-list>')($rootScope);
    $rootScope.$digest();
    var lis = template.children().children();

    expect(lis.length).toBe(2);
  });
});
