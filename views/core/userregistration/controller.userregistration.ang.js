var app = angular.module("giftzApp");

app.controller('userRegCtrl',['$scope','$cookies',userRegCtrl]);

function userRegCtrl($scope,$cookies){
    var dataModel = this;
    dataModel.dateofbirth ="";
console.log(this)
    $scope.$watch('dateofbirth', function (date)
    {
        dataModel.dateofbirth =date;
    });

}