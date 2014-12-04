var app = angular.module("app", ["ui.router", "restangular","ngAnimate"]);
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol("{[");
	$interpolateProvider.endSymbol("]}");
});

app.config(function($httpProvider) {
	// 只在启动时运行一次，所以不能在此设置csrf, 因为此时标志还未被服务器设置。
	$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
});

app.run(function($http) {
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("index", {
			url: "/index",
			views: {
				"": {
					templateUrl: "views/home.html",
					controller: function($scope){}
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
				"fever-list@fever": {
					templateUrl: "views/idea_sites/fever-item.html"
				},
				"footer@fever": {
					templateUrl: "views/footer.html"
				}
			}
		})
		//全部
		.state("fever.0", {
			url: "/0",
			views: {
				"": {
					templateUrl: "views/fever-box.html",
					controller: function($scope){
						$scope.getFeverAll();
					}
				},
				"fever-list@fever.0": {
					templateUrl: "views/idea_sites/fever-item-all.html"
				}
			}
		})
		//分类一
		.state("fever.1", {
			url: "/1",
			views: {
				"": {
					templateUrl: "views/fever-box.html",
					controller: function($scope){
						$scope.getFeverOne();
					}
				},
				"fever-list@fever.1": {
					templateUrl: "views/idea_sites/fever-item-one.html"
				}
			}
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
		.state("submit-fever-center.submit-fever-step1", {
			url: "/submit-fever-step1",
			templateUrl: "views/submit-fever-step1.html"
		})
		.state("submit-fever-center.submit-fever-step2", {
			url: "/submit-fever-step2",
			templateUrl: "views/submit-fever-step2.html"
		})
		.state("submit-fever-center.submit-fever-step3", {
			url: "/submit-fever-step3",
			templateUrl: "views/submit-fever-step3.html"
		})

		// 商店
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
				"product-list@shop": {
					templateUrl: "views/idea_sites/sale-item.html"
				},
				"footer@shop": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("shop.product-new", {
			url: "/product-new",
			views: {
				"": {
					templateUrl: "views/product-new.html",
					controller: function($scope){
						$scope.getShopLatest();
					}
				},
				"product-filter@shop.product-new": {
					templateUrl: "views/product-filter.html"
				},
				"product-list@shop.product-new": {
					templateUrl: "views/idea_sites/sale-item-new.html"
				}
			}
		})
		.state("shop.product-hot", {
			url: "/product-hot",
			views: {
				"": {
					templateUrl: "views/product-hot.html",
					controller: function($scope){
						$scope.getShopHot();
					}
				},
				"product-filter@shop.product-hot": {
					templateUrl: "views/product-filter.html"
				},
				"product-list@shop.product-hot": {
					templateUrl: "views/idea_sites/sale-item-hot.html"
				}
			}
		})
		//全部
		.state("shop.0", {
			url: "/0",
			views: {
				"": {
					templateUrl: "views/product-new.html",
					controller: function($scope){
						$scope.getShopOne();
					}
				},
				"product-list@shop.0": {
					templateUrl: "views/idea_sites/sale-item-new.html"
				}
			}
		})
		//第一分类
		.state("shop.1", {
			url: "/1",
			views: {
				"": {
					templateUrl: "views/product-new.html",
				},
				"product-list@shop.1": {
					templateUrl: "views/idea_sites/sale-item-new.html"
				}
			}
		})
		//第二分类
		.state("shop.2", {
			url: "/2",
			views: {
				"": {
					templateUrl: "views/product-new.html",
				},
				"product-list@shop.2": {
					templateUrl: "views/idea_sites/sale-item-new.html"
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
		//		商品详情
		.state("product-detail", {
			url: "/product-detail",
			views: {
				"": {
					templateUrl: "views/product-detail.html",
					controller: "shopDetailController"
				},
				"footer@product-detail": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("product-detail.describe", {
			url: "/idea-detail-describe",
			templateUrl: "views/product-detail-describe.html"
		})
		.state("product-detail.buy", {
			url: "/idea-detail-buy",
			templateUrl: "views/product-detail-buy.html"
		})
		.state("product-detail.comment", {
			url: "/idea-detail-comment",
			templateUrl: "views/product-detail-comment.html"
		})
		.state("product-detail.question", {
			url: "/idea-detail-question",
			templateUrl: "views/product-detail-question.html"
		})
		//		创意详情
		.state("fever-detail", {
			url: "/fever-detail",
			views: {
				"": {
					templateUrl: "views/fever-detail.html"
				},
				"footer@fever-detail": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("fever-detail.describe", {
			url: "/fever-detail-describe",
			templateUrl: "views/fever-detail-describe.html"
		})
		.state("fever-detail.spit", {
			url: "/fever-detail-sipt",
			templateUrl: "views/fever-detail-spit.html"
		})
		.state("fever-detail.question", {
			url: "/fever-detail-question",
			templateUrl: "views/fever-detail-question.html"
		})
});
