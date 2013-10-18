angular.module('todoApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/terms', {
      controller: 'TermsListController',
      templateUrl: 'terms/terms-list.html',
      controllerAs: 'termsList'
    })
    .when('/terms/:id', {
      controller: 'TermDetailController',
      templateUrl: 'terms/detail/term-detail.html',
      controllerAs: 'termDetail'
    })
    .otherwise({
      redirectTo: '/terms'
    })
  }])
  .constant('TODOS_PATH', '/todos')
  .constant('COMMENTS_PATH', '/comments');
