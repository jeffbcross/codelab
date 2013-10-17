angular.module('todos')
  .controller('AddCommentController', ['$scope', 'tdTodoCommentsStore', function ($scope, tdTodoCommentsStore) {
    $scope.addComment = function (id, comment) {
      tdTodoCommentsStore.addCommentToTodo(id, comment);
      $scope.newComment = {};
    };
  }]);