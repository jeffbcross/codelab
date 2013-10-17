describe('addComment', function () {
  var $compile, $rootScope;

  beforeEach(module('todos', 'components/addComment/add-comment.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));


  it('should provide a form', function () {
    var element = $compile('<td-add-comment></td-add-comment>')($rootScope);
    $rootScope.$digest();

    expect(element.find('form').length).toBe(1);
  });
});