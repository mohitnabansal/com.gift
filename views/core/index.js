var app = angular.module('giftzApp',['ngCookies','ngMaterial','ngAnimate','ngAria','ngMessages']);

app.config(function($mdIconProvider,$compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
    $mdIconProvider
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*// register the interceptor as a service
app.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
    return {
        // optional method
        'request': function(config) {
            // do something on success
            return config;
        },

        // optional method
        'requestError': function(rejection) {
            // do something on error
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },



        // optional method
        'response': function(response) {
            // do something on success
            return response;
        },

        // optional method
        'responseError': function(rejection) {
            // do something on error
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        }
    };
});

$httpProvider.interceptors.push('myHttpInterceptor');*/

