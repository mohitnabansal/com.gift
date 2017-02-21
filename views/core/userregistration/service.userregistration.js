var app = angular.module('giftzApp');

app.factory('registrationService',['$http',function($http) {

    var registrationService = {};

    registrationService.registrationPost = function (data) {

            console.log(data);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            $http({
                method: 'POST',
                url: '/register',
                data:data
            }).then(function successCallback(response) {
                console.log(response);
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response);
                console.log("FAIL");
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    };
    return registrationService;

}]);