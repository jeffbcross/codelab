angular.module('glossaryApp')
  .controller('ProfileController', ['$scope', 'tdProfileStore', function ($scope, tdProfileStore) {
    $scope.user = tdProfileStore;
  }])
  .directive('tdProfile', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileController'
    }
  });
