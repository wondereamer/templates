var app = angular.module('app', ['ui.router', 'restangular']);
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
                 'login':{
                 	templateUrl: 'views/login.html'
                 }
            }
        })
//      .state('login', {
//          url: '/login',
//          views: {
//               '': {
//                   templateUrl: 'views/login.html'
//               }
//               
//          }
//      })
        .state('register', {
            url: '/register',
            views: {
                 '': {
                     templateUrl: 'views/register.html'
                 }
                 
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
                 },
                 'footer@category':{
                 	templateUrl:'views/footer.html'
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
             template:'<div ideashopgridview>'  +
                            '<div ng-repeat="item in items">' + 
                                 '<div ideasaleitem></div>'  + 
                            '</div>'   + 
                        '</div>',
             controller: "SaleController"
        })
        .state('fever', {
            url: '/fever',
            template: '<h4>fever</h4>'
        })
        .state('presale', {
            url: '/presale',
        /*template: '<h4>presale</h4>'*/
            templateUrl: 'views/text.html'
        })
});
