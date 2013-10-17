'use strict';

describe('addComment', function () {
  var $compile, $rootScope, scope;

  beforeEach(module('todos', 'components/addComment/add-comment.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
  }));


  it('should provide a form', function () {
    var element = $compile('<td-add-comment todo-id="1"></td-add-comment>')($rootScope);
    scope.$digest();

    expect(element.find('form').length).toBe(1);
  });
});