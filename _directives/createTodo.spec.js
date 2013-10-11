describe('createTodo', function () {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('todos'));

  beforeEach(inject( function (_$compile_, _$rootScope_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('temp/todos.json').respond('[]')
  }));


  it('should render a form with model values in the input', function () {
    var elem = $compile('<td-create-todo></td-create-todo>')($rootScope);
    var scope = elem.scope();
    scope.newTodo.text = 'Do the thing';
    scope.$digest();

    var textInput = angular.element(elem.children().children()[1]);

    expect(textInput.val()).toBe('Do the thing');
  });
});
