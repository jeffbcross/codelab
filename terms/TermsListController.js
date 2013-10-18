angular.module('glossaryApp')
  .controller('TermsListController',
    ['$scope', 'glTermsStore', 'glProfileStore',
    function ($scope, glTermsStore, glProfileStore) {
      this.terms = glTermsStore.terms;
      this.currentUser = glProfileStore;

      this.saveTerm = function () {
        glTermsStore.add({
          name: $scope.newTerm.name,
          definition: $scope.newTerm.definition,
          creatorEmail: this.currentUser.email,
          createdAt: new Date().getTime()
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);
