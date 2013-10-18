angular.module('glossaryApp')
  .controller('TermsListController',
    ['$scope', 'tdTermsStore', 'tdProfileStore',
    function ($scope, tdTermsStore, tdProfileStore) {
      this.terms = tdTermsStore.terms;
      this.currentUser = tdProfileStore;

      this.saveTerm = function () {
        tdTermsStore.add({
          name: $scope.newTerm.name,
          definition: $scope.newTerm.definition,
          creatorEmail: this.currentUser.email,
          createdAt: new Date().getTime()
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
