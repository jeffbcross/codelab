'use strict';

describe('TodoListController', function () {
  var TodoListController;

  beforeEach(module('todos'));

  beforeEach(inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    TodoListController = $controller('TodoListController', {
      $scope: scope
    });
  }));


  it('should exist', function () {
    expect(!!TodoListController).toBe(true);
  });
});
