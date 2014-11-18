var app = angular.module('app', ['ui.router', 'restangular']);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}'); 
});

app.config(function($httpProvider) {
    // 只在启动时运行一次，所以不能在此设置csrf, 因为此时标志还未被服务器设置。
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
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
//      发现创意
        .state('idea', {
            url: '/idea',
            views:{
            	'':{
            		templateUrl: 'views/idea.html'
            	},
            	'carousel@idea':{
            		templateUrl: 'views/carousel.html'
            	},
            	'idea-type@idea':{
            		templateUrl: 'views/idea-type.html'
            	},
            	'idea-list@idea':{
            		templateUrl: 'views/idea_sites/idea-item.html'
            	},
            	'footer@idea':{
            		templateUrl: 'views/footer.html'
            	}
            }
        })
//      发起创意
		.state('submit-idea', {
            url: '/submit-idea',
            views:{
            	'':{
            		templateUrl: 'views/submit-idea.html'
            	},
            	'carousel@submit-idea':{
            		templateUrl: 'views/carousel.html'
            	},
            	'footer@submit-idea':{
            		templateUrl: 'views/footer.html'
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
//      用户中心
        .state('user-center', {
            url: '/user-center',
            templateUrl: 'views/user-center.html'
        })
//      用户设置中心
       .state('user-setting-center',{
       		url: '/user-setting-center',
       		templateUrl: 'views/user-setting-center.html',
            controller: 'personalController'
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
//     激活账号
	   .state('activate-account',{
	   		url: '/activate-account',
	   		templateUrl: 'views/activate-account.html'
	   })
//		商品详情
        .state('product-detail', {
            url: '/product-detail',
            views:{
            	'':{
            		templateUrl: 'views/product-detail.html'
            	},
            	'footer@product-detail':{
            		templateUrl: 'views/footer.html'
            	}
            }
        })
        .state('product-detail.describe',{
        	url:'/idea-detail-describe',
        	templateUrl:'views/product-detail-describe.html'
        })
        .state('product-detail.buy',{
        	url:'/idea-detail-buy',
        	templateUrl:'views/product-detail-buy.html'
        })
        .state('product-detail.comment',{
        	url:'/idea-detail-comment',
        	templateUrl:'views/product-detail-comment.html'
        })
        .state('product-detail.question',{
        	url:'/idea-detail-question',
        	templateUrl:'views/product-detail-question.html'
        })
//		创意详情
        .state('idea-detail', {
            url: '/idea-detail',
            views:{
            	'':{
            		templateUrl: 'views/idea-detail.html'
            	},
            	'footer@idea-detail':{
            		templateUrl: 'views/footer.html'
            	}
            }
        })
        .state('idea-detail.describe',{
        	url:'/idea-detail-describe',
        	templateUrl:'views/idea-detail-describe.html'
        })
        .state('idea-detail.spit',{
        	url:'/idea-detail-sipt',
        	templateUrl:'views/idea-detail-spit.html'
        })
        .state('idea-detail.question',{
        	url:'/idea-detail-question',
        	templateUrl:'views/idea-detail-question.html'
        })
});
