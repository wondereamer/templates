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
                 '': {
                     templateUrl: 'views/window.html',
                     controller: function($scope) {}
                 },
            }
        })
        .state('category', {
            url: '/category',
            views: {
                 '': {
                     templateUrl: 'views/category.html',
                     controller: function($scope) {}
                 },
                 'type-nav@category':{
                 	templateUrl: 'views/type-nav.html'
                 },
                 'products-list@category':{
                 	templateUrl: 'views/products-list.html'
                 }
            }
        })
        .state('product-detail', {
            url: '/product-detail',
            views: {
                 "": {
                     templateUrl: 'views/product-detail.html'
                 },
            }
        })
        .state('sale', {
            url: '/sale',
            views: {
                 "": {
                     templateUrl: 'views/sale.html',
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
});
