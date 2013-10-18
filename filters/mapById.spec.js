'use strict';

describe('mapById', function () {
  var mapById;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($filter) {
    mapById = $filter('tdMapById');
  }));


  describe('.map()', function () {
    it('should exist', function () {
      expect(typeof mapById).toBe('function');
    });


    it('should return a map of ids to todos', function () {
      var todo1 = {
        done: false,
        text: 'Do it',
        id: 0
      };
      var todo2 = {
        done: true,
        text: 'Done',
        id: 1
      };
      var todoArray = [todo1, todo2];

      expect(mapById(todoArray)).toEqual({0: todo1, 1: todo2});
    });
  });
});
