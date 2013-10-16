angular.module('todos')
  .controller('AddCommentController', ['$scope', function ($scope) {
    $scope.addComment = function () {
      console.log('addComment', $scope.newComment);

    }
  }]);