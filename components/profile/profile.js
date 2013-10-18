angular.module('glossaryApp')
  .controller('ProfileController', ['$scope', 'glProfileStore', function ($scope, glProfileStore) {
    $scope.user = glProfileStore;
  }])
  .directive('glProfile', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileController'
    }
  });
