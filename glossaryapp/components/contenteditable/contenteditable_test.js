describe('contenteditableDirective', function () {
  'use strict';

  beforeEach(module('contenteditableDirective'));


  describe('contenteditable', function () {
    var scope, $compile;

    beforeEach(inject(function ($rootScope, _$compile_) {
      scope = $rootScope.$new();
      $compile = _$compile_;
    }));


    it('should set the model\'s value to the element\'s innerHTML', function () {
      var element = $compile('<div contenteditable="true" ng-model="myModel"></div>')(scope);
      scope.myModel = 'define this';
      scope.$digest();

      expect(element.html()).toBe('define this');
    });


    it('should update the model when the content of the element changes', function () {
      var element = $compile('<div contenteditable="true" ng-model="myModel"></div>')(scope);
      scope.myModel = 'define this';
      scope.$digest();

      element.html('updated definition');
      element.triggerHandler('blur');

      expect(scope.myModel).toBe('updated definition');
    });
  });
});
