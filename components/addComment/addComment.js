angular.module('todos')
  .directive('addComment', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      templateUrl: 'components/addComment/add-comment.html',
      controller: 'AddCommentController',
      scope: true,
      link: function (scope, element, attrs) {
        scope.todoId = $parse(attrs.todoId)(scope);
      }
    }
  }]);