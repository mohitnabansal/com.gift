var app = angular.module('giftzApp',['ngCookies','ngMaterial','ngAnimate','ngAria','ngMessages']);

app.config(function($mdIconProvider,$compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
    $mdIconProvider
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})
