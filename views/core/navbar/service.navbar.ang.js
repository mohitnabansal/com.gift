var app = angular.module('giftzApp');


app.factory('navBarService',['$http',function($http){

var baseUrl = '/categories';

var navBarService = {};

navBarService.getAllCategories = function(){
    return $http.get(baseUrl);
};


return navBarService;

}]);
