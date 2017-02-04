var app = angular.module('giftzApp');


app.factory('navBarService',['$http',function($http){

var baseUrl = '/categories';

var navBarService = {};

navBarService.getAllCategories = function(){
    return $http.get(baseUrl);
};

navBarService.registrationPost = function(){
    var registration = function() {
        $http({
            method : 'POST',
            url : '/registration'
        }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
};
return registration;
};

return navBarService;

}]);
