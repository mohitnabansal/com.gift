var app = angular.module('giftzApp');



app.controller('HeaderController',['navBarService','$scope',function (navBarService,$scope) {

    $scope.categoriesList;

    getCategoriesList();

    function getCategoriesList() {
        navBarService.getAllCategories()
            .then(function (response) {
                $scope.categoriesList = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
}]);