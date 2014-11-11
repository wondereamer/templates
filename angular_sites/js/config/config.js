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
                 }
            }
        })
//		商店
        .state('shop', {
            url: '/shop',
            views: {
                 '': {
                     templateUrl: 'views/shop.html',
                     controller: function($scope) {}
                 },
                 'carousel@shop':{
                 	templateUrl: 'views/carousel.html'
                 },
                 'type-nav@shop':{
                 	templateUrl: 'views/type-nav.html'
                 },
                 'product-filter@shop':{
                 	templateUrl:'views/product-filter.html'
                 },
                 'product-list@shop':{
                 	templateUrl: 'views/idea_sites/sale-item.html'
                 },
                 'footer@shop':{
                 	templateUrl:'views/footer.html'
                 }
            }
        })
        
        .state('product-detail', {
            url: '/product-detail',
            templateUrl: 'views/product-detail.html'
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
//      预售
        .state('presale', {
            url: '/presale',
            views: {
            	'':{
            		templateUrl: 'views/presale.html'
            	},
            	'presale-list@presale':{
            		templateUrl: 'views/idea_sites/presale-item.html'
            	}
            }
            
        })
//      用户中心
        .state('user-center', {
            url: '/user-center',
            templateUrl: 'views/user-center.html'
        })
//      用户设置中心
       .state('user-setting-center',{
       		url: '/user-setting-center',
       		templateUrl: 'views/user-setting-center.html'
       })
       .state('user-setting-center.setting',{
       		url: '/setting',
       		templateUrl: 'views/user-setting-list.html'
       })
       .state('user-setting-center.info',{
       		url: '/info',
       		templateUrl: 'views/user-info-list.html'
       })
       .state('user-setting-center.address',{
       		url: '/address',
       		templateUrl: 'views/user-address-list.html'
       })
       .state('user-setting-center.order',{
       		url: '/order',
       		templateUrl: 'views/user-order-list.html'
       })
       .state('user-setting-center.coupon',{
       		url: '/coupon',
       		templateUrl: 'views/user-coupon-list.html'
       })
       .state('user-setting-center.service',{
       		url: '/service',
       		templateUrl: 'views/user-service-list.html'
       })
});
