goog.provide('glossaryApp.contenteditableDirective.module');
goog.provide('glossaryApp.contenteditableDirective.contenteditableDirective');

/**
 * Directive for contenteditable elements
 * @constructor
 * @type {angular.Directive}
 */
glossaryApp.contenteditableDirective.contenteditableDirective = function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      if(!ngModel) return;

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || '');
      };

      element.on('blur keyup', function() {
        scope.$apply(read);
      });
      read();

      function read() {
        var html = element.html();
        if( attrs.stripBr && html == '<br>' ) {
          html = '';
        }
        ngModel.$setViewValue(html);
      }
    }
  };
};

glossaryApp.contenteditableDirective.module = angular.module(
    'glossaryApp.contenteditableDirective', []).
directive(
    'contenteditableDirective',
    glossaryApp.contenteditableDirective.contenteditableDirective);
