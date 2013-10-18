angular.module('todoApp')
  .controller('TermsListController',
    ['$scope', 'tdTermsStore',
    function ($scope, tdTermsStore) {
      this.terms = tdTermsStore.todos;

      this.saveTerm = function () {
        tdTermsStore.add({
          text: $scope.newTerm.text,
          done: $scope.newTerm.done || false
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
