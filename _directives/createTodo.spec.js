describe('createTodo', function () {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('todos', '_directives/createTodo.html'));

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

    var textInput = angular.element(elem.children().children()[1]);
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

    var button = angular.element(elem.children().children()[2]);
    expect(button.attr('disabled')).toBe('disabled');

    scope.newTodo.text = 'Do the thing!';
    scope.$digest();

    expect(button.attr('disabled')).toBeUndefined();
  });
});
