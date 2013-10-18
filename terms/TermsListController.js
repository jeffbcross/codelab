angular.module('todoApp')
  .controller('TermsListController',
    ['$scope', 'tdTermsStore',
    function ($scope, tdTermsStore) {
      this.terms = tdTermsStore.todos;

      this.saveTerm = function () {
        tdTermsStore.add({
          name: $scope.newTerm.name
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
