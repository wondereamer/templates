var app = angular.module('app', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}'); 
});

app.controller('test', function($scope) {
    $scope.person = {
        'name' : 'wdj'
    }
    $scope.show = function(number){ 
        $scope.person.name = number;
        alert('ok');
    }
});
