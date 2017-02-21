var app = angular.module('giftzApp');

app.directive('coreNavbar', function ($mdSticky,$compile) {
    var directiveDefinitionObject = {
        priority: 0,
        templateUrl: 'views/core/navbar/navbar.component.html',
        restrict: 'AE',
        //templateNamespace: 'html',
      //  scope: false,

       // controllerAs: 'header',
        //  bindToController: true,
        // require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
        // multiElement: false,
        // compile: function compile(tElement, tAttrs, transclude) {
        // return {
        // pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        //  post: function postLink(scope, iElement, iAttrs, controller) {


        //         }
        //   }
        // or
        // return function postLink( ... ) { ... }
        // },
        // or
        // link: {
        //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
        // }
        // or
      /*  link: function(scope,element) {
            $mdSticky(scope, element);
        }*/
    };
    return directiveDefinitionObject;
});

app.directive('sticky', Sticky);

Sticky.$inject = [ '$mdSticky' ];

function Sticky($mdSticky) {
    return {
        //restrict : 'A',
        link : function(scope, element) {
            $mdSticky(scope, element);
        }
    }
}