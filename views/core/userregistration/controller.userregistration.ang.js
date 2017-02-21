var app = angular.module("giftzApp");

app.controller('userRegCtrl',['$scope','registrationService','$cookies',function($scope,registrationService,$cookies) {userRegCtrl}]);

function userRegCtrl($scope,$cookies,registrationService){
    var dataModel = this;
    dataModel.dateofbirth ="";
    $scope.$watch('dateofbirth', function (date)
    {
        dataModel.dateofbirth = date;
    });
    $scope.submitForm = function(){
        console.log(this.user);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        registrationService.registrationPost(this.user)
    }
}