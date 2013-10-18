angular.module('glossaryApp', ['ngRoute', 'ngResource'])
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
  .constant('TODOS_PATH', '/termsapi')
  .constant('COMMENTS_PATH', '/comments')
  .constant('LOCALSTORAGE_PROFILE_KEY', 'glossaryApp.profile');
