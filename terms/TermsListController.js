angular.module('todoApp')
  .controller('TermsListController',
    ['$scope', 'tdTermsStore', 'tdProfileStore',
    function ($scope, tdTermsStore, tdProfileStore) {
      this.terms = tdTermsStore.todos;
      this.currentUser = tdProfileStore;
      console.log('currentUser', this.currentUser)

      this.saveTerm = function () {
        tdTermsStore.add({
          name: $scope.newTerm.name
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
