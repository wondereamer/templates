var app = angular.module("app", ["ui.router", "restangular", "uploadImg"]);
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol("{[");
	$interpolateProvider.endSymbol("]}");
});

app.run(function($rootScope){
	// $rootScope.$watch(imgUrl,function(newValue,oldValue){
	// 	$rootScope.img=newValue;
	// });
});

app.config(function($httpProvider) {
	// 只在启动时运行一次，所以不能在此设置csrf, 因为此时标志还未被服务器设置。
	$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
});
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("index", {
			url: "/index",
			views: {
				"": {
					templateUrl: "views/home.html",
				}
			}
		})
		// 商店首页
		.state("shop", {
			url: "/shop",
			views: {
				"": {
					templateUrl: "views/shop.html",
					controller: "shopController"
				},
				"carousel@shop": {
					templateUrl: "views/carousel.html"
				},
				"latest-list@shop": {
					templateUrl: "views/idea_sites/shop-item-latest.html"
				},
				"hot-list@shop": {
					templateUrl: "views/idea_sites/shop-item-hot.html"
				},
				"footer@shop": {
					templateUrl: "views/footer.html"
				}
			}
		})
		// 商店最新商品
		.state("shop.latest", {
			url: "/latest",
			views: {
				"shop-type": {
					templateUrl: "views/shop-box.html",
					controller: function($scope){
						$scope.getShopLatest();
					}
				},
				"shop-filter@shop.latest": {
					templateUrl: "views/shop-filter.html"
				},
				"shop-list@shop.latest": {
					templateUrl: "views/idea_sites/shop-item-type.html"
				}
			}
		})

		// 用户中心
		.state("user-center", {
			url: "/user-center",
			templateUrl: "views/user-center.html"
		})

		// 用户设置中心
		.state("user-setting-center", {
			url: "/user-setting-center",
			templateUrl: "views/user-setting-center.html",
			controller: "personalController"
		})
		.state("user-setting-center.setting", {
			url: "/setting",
			templateUrl: "views/user-setting-list.html",
			controller: function($scope){
				$scope.getAuth();
			}
		})
		.state("user-setting-center.info", {
			url: "/info",
			templateUrl: "views/user-info-list.html",
			controller: function($scope){
				$scope.getUserInfo();
			}
		})

});
