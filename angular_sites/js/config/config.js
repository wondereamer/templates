var app = angular.module('app', ['ui.router']);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}'); 
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                 "": {
                     templateUrl: 'views/home.html',
                     controller: function($scope) {}
                 },
            }
        })
        .state('fever', {
            url: '/fever',
            template: '<h4>fever</h4>'
        })
        .state('presale', {
            url: '/presale',
            template: '<h4>presale</h4>'
        })
        .state('sale', {
            url: '/sale',
            template: '<h4>sale</h4>'
        });
});
