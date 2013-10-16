angular.module('todos')
  .directive('tdAddComment', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      templateUrl: 'components/addComment/add-comment.html',
      controller: 'AddCommentController',
      scope: true,
      link: function (scope, element, attrs) {
        scope.todo = $parse(attrs.todo)(scope);
      }
    }
  }]);