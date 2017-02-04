var app = angular.module('giftzApp');

app.directive('compareTo',function () {
    return {
        require: 'ngModel',


        scope: {
            otherModelValue1 : '=compareTo'
        },
        link: function (scope, elem, attrs, ngModel) {
            ngModel.$validators.compareTo = function (modelValue) {
                console.log(modelValue);
                console.log(scope.otherModelValue1)
                return modelValue = scope.otherModelValue1;
            }
        }

    }});