var app = angular.module("app", ["ui.router", "restangular", "ngAnimate", "fever", "shop","uploadImg"]);
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
		//发现创意
		.state("fever", {
			url: "/fever",
			views: {
				"": {
					templateUrl: "views/fever.html",
					controller: "feverController"
				},
				"carousel@fever": {
					templateUrl: "views/carousel.html"
				},
				"latest-list@fever": {
					templateUrl: "views/idea_sites/fever-item-latest.html"
				},
				"success-list@fever": {
					templateUrl: "views/idea_sites/fever-item-success.html"
				},
				"footer@fever": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("fever.latest", {
			url: "/latest",
			views: {
				"": {
					templateUrl: "views/fever-box.html",
					controller: function($scope){
						$scope.getFeverLatest();
					}
				},
				"fever-list@fever.latest": {
					templateUrl: "views/idea_sites/fever-item-type.html"
				}
			}
		})
		// 最新创意商品详情
		.state("fever.latest.detail", {
            url: "/detail/:feverId",
			views: {
				"fever-detail": {
					templateUrl: "views/fever-detail.html",
					controller: function($scope,$stateParams){
						$scope.getFeverDetail($stateParams.feverId);
					}
				}
			}
		})
		.state("fever.success", {
			url: "/success",
			views: {
				"": {
					templateUrl: "views/fever-box.html",
					controller: function($scope){
						$scope.getFeverSuccess();
					}
				},
				"fever-list@fever.success": {
					templateUrl: "views/idea_sites/fever-item-type.html"
				}
			}
		})
		// 成功创意商品详情
		.state("fever.success.detail", {
            url: "/detail/:feverId",
			views: {
				"fever-detail": {
					templateUrl: "views/fever-detail.html",
					controller: function($scope,$stateParams){
						$scope.getFeverDetail($stateParams.feverId);
					}
				}
			}
		})
		// 创意详情
		.state("fever.detail", {
            url: "/detail/:feverId",
			views: {
				"": {
					templateUrl: "views/fever-detail.html",
					controller: function($scope,$stateParams){
						$scope.getFeverDetail($stateParams.feverId);
					}
				},
				"footer@fever-detail": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("fever.detail.describe", {
			url: "/describe",
			templateUrl: "views/fever-detail-describe.html"
		})
		.state("fever.detail.spit", {
			url: "/sipt",
			templateUrl: "views/fever-detail-spit.html"
		})
		.state("fever.detail.question", {
			url: "/question",
			templateUrl: "views/fever-detail-question.html"
		})
		// 发起创意
		.state("submit-fever-center", {
			url: "/submit-fever-center",
			views: {
				"": {
					templateUrl: "views/submit-fever-center.html"
				},
				"carousel@submit-fever-center": {
					templateUrl: "views/carousel.html"
				},
				"submit-fever-course@submit-fever-center": {
					templateUrl: "views/submit-fever-course.html"
				},
				"footer@submit-fever-center": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("submit-fever-center.step1", {
			url: "/step1",
			templateUrl: "views/submit-fever-step1.html"
		})
		.state("submit-fever-center.step2", {
			url: "/step2",
			templateUrl: "views/submit-fever-step2.html"
		})
		.state("submit-fever-center.step3", {
			url: "/step3",
			templateUrl: "views/submit-fever-step3.html"
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
		// 商店最热商品
		.state("shop.hot", {
			url: "/hot",
			views: {
				"shop-type": {
					templateUrl: "views/shop-box.html",
					controller: function($scope){
						$scope.getShopHot();
					}
				},
				"shop-filter@shop.hot": {
					templateUrl: "views/shop-filter.html"
				},
				"shop-list@shop.hot": {
					templateUrl: "views/idea_sites/shop-item-hot.html"
				}
			}
		})
		// 商品详情
		.state("shop.detail", {
			url: "/detail/:productId",
			views: {
				"shop-detail": {
					templateUrl: "views/shop-detail.html",
					controller: function($scope,$stateParams){
						$scope.getShopDetail($stateParams.productId);
					}
				}
			}
		})
		// 最新商品的详情
		.state("shop.latest.detail", {
			url: "/detail/:productId",
			views: {
				"shop-detail": {
					templateUrl: "views/shop-detail.html",
					controller: function($scope,$stateParams){
						$scope.getShopDetail($stateParams.productId);
					}
				}
			}
		})
		// 最热商品的详情
		.state("shop.hot.detail", {
			url: "/detail/:productId",
			views: {
				"shop-detail": {
					templateUrl: "views/shop-detail.html",
					controller: function($scope,$stateParams){
						$scope.getShopDetail($stateParams.productId);
					}
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
		.state("user-setting-center.address", {
			url: "/address",
			templateUrl: "views/user-address-list.html"
		})
		.state("user-setting-center.order", {
			url: "/order",
			templateUrl: "views/user-order-list.html"
		})
		.state("user-setting-center.coupon", {
			url: "/coupon",
			templateUrl: "views/user-coupon-list.html"
		})
		.state("user-setting-center.service", {
			url: "/service",
			templateUrl: "views/user-service-list.html"
		})


});
