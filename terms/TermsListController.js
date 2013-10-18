angular.module('todoApp')
  .controller('TermsListController',
    ['$scope', 'tdTermsStore',
    function ($scope, tdTermsStore) {
      this.terms = tdTermsStore.todos;

      this.saveTerm = function () {
        tdTermsStore.add({
          text: $scope.newTerm.text
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
