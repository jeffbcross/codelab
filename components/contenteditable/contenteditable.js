angular.module('glossaryApp')
  .directive('contenteditable', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return;

        ngModel.$render = function() {
          element.html(ngModel.$viewValue || '');
        };

        element.on('blur keyup change', function() {
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
  });
