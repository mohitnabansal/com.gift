var app = angular.module('giftzApp'); controller: 'HeaderController',

app.directive('coreNavbar', function () {
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
        // link: function postLink( ... ) { ... }
    };
    return directiveDefinitionObject;
});