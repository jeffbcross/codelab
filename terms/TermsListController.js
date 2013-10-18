angular.module('todoApp')
  .controller('TermsListController',
    ['$scope', 'tdTodosStore', 'Todo',
    function ($scope, tdTodosStore, Todo) {
      var self = this;

      this.terms = tdTodosStore.todos;

      this.saveTerm = function () {
        tdTodosStore.add({
          text: $scope.newTerm.text,
          done: $scope.newTerm.done || false
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
