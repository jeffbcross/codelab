angular.module('todos')
  .directive('tdCreateTodo', function () {
    return {
      restrict: 'E',
      scope: true,
      template: '<ng-form name="newTodo">' +
                  '<input type="checkbox" ng-model="newTodo.done">' +
                  '<input type="text" ng-model="newTodo.text" required>' +
                  '<button ng-disabled="!newTodo.$valid" ng-click="saveTodo()">' +
                    'Add Todo' +
                  '</button>' +
                '</ng-form>',
      controller: 'CreateTodoController'
    };
  });
