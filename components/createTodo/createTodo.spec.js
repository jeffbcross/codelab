'use strict';

describe('createTodo', function () {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('todos', 'components/createTodo/createTodo.html'));

  beforeEach(inject( function (_$compile_, _$rootScope_, _$httpBackend_, TODOS_PATH) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(TODOS_PATH).respond('[]');
  }));


  it('should render a form with model values in the input', function () {
    var elem = $compile('<td-create-todo></td-create-todo>')($rootScope);
    var scope = elem.scope();
    $httpBackend.flush();

    var textInput = elem.find('form').find('input');

    expect(textInput.val()).toBe('');

    scope.newTodo.text = 'Do the thing';
    scope.$digest();

    expect(textInput.val()).toBe('Do the thing');
  });


  it('should disable the add button until newTodo.text has a value', function () {
    var elem = $compile('<td-create-todo></td-create-todo>')($rootScope);
    var scope = elem.scope();
    $httpBackend.flush();
    scope.$digest();

    var button = angular.element(elem.find('form').children()[2]);
    expect(button.attr('disabled')).toBe('disabled');

    scope.newTodo.text = 'Do the thing!';
    scope.$digest();

    expect(button.attr('disabled')).toBeUndefined();
  });


  describe('CreateTodoController', function () {
    var CreateTodoController, scope, Todo;

    beforeEach(inject(function ($controller, _Todo_) {
      scope = $rootScope.$new();
      Todo = _Todo_;
      CreateTodoController = $controller('CreateTodoController', {
        $scope: scope
      });
    }));


    it('should provide a method to create a new todo', function () {
      expect(typeof scope.saveTodo).toBe('function');
    });


    it('should reset the form model when saving a todo', function () {
      var originalModel = {done: false, text: 'Do the thing', id: 1};
      scope.newTodo = originalModel;

      expect(scope.newTodo).toEqual(originalModel);
      scope.saveTodo();

      expect(scope.newTodo).toEqual({done: null, text: null, id: null});
    });
  });
});
