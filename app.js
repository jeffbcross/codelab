angular.module('todoApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/todos', {
      controller: 'TermsListController',
      templateUrl: 'terms/terms-list.html',
      controllerAs: 'termsList'
    })
    .when('/todos/:id', {
      controller: 'TodoDetailController',
      templateUrl: 'terms/detail/todo-detail.html',
      controllerAs: 'todoDetail'
    })
    .otherwise({
      redirectTo: '/todos'
    })
  }])
  .constant('TODOS_PATH', '/todos')
  .constant('COMMENTS_PATH', '/comments');
