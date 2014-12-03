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
		.state("idea", {
			url: "/idea",
			views: {
				"": {
					templateUrl: "views/idea.html",
					controller: "feverController"
				},
				"carousel@idea": {
					templateUrl: "views/carousel.html"
				},
				"idea-list@idea": {
					templateUrl: "views/idea_sites/fever-item.html"
				},
				"footer@idea": {
					templateUrl: "views/footer.html"
				}
			}
		})
		//      发起创意
		.state("submit-idea-center", {
			url: "/submit-idea-center",
			views: {
				"": {
					templateUrl: "views/submit-idea-center.html"
				},
				"carousel@submit-idea-center": {
					templateUrl: "views/carousel.html"
				},
				"submit-idea-course@submit-idea-center": {
					templateUrl: "views/submit-idea-course.html"
				},
				"footer@submit-idea-center": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("submit-idea-center.submit-idea-step1", {
			url: "/submit-idea-step1",
			templateUrl: "views/submit-idea-step1.html"
		})
		.state("submit-idea-center.submit-idea-step2", {
			url: "/submit-idea-step2",
			templateUrl: "views/submit-idea-step2.html"
		})
		.state("submit-idea-center.submit-idea-step3", {
			url: "/submit-idea-step3",
			templateUrl: "views/submit-idea-step3.html"
		})
		//		商店
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
		//      用户中心
		.state("user-center", {
			url: "/user-center",
			templateUrl: "views/user-center.html"
		})
		//      用户设置中心
		.state("user-setting-center", {
			url: "/user-setting-center",
			templateUrl: "views/user-setting-center.html",
			controller: "personalController"
		})
		.state("user-setting-center.setting", {
			url: "/setting",
			templateUrl: "views/user-setting-list.html"
		})
		.state("user-setting-center.info", {
			url: "/info",
			templateUrl: "views/user-info-list.html"
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
		//     激活账号
		.state("activate-account", {
			url: "/activate-account",
			templateUrl: "views/activate-account.html"
		})
		//		商品详情
		.state("product-detail", {
			url: "/product-detail",
			views: {
				"": {
					templateUrl: "views/product-detail.html"
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
		.state("idea-detail", {
			url: "/idea-detail",
			views: {
				"": {
					templateUrl: "views/idea-detail.html"
				},
				"footer@idea-detail": {
					templateUrl: "views/footer.html"
				}
			}
		})
		.state("idea-detail.describe", {
			url: "/idea-detail-describe",
			templateUrl: "views/idea-detail-describe.html"
		})
		.state("idea-detail.spit", {
			url: "/idea-detail-sipt",
			templateUrl: "views/idea-detail-spit.html"
		})
		.state("idea-detail.question", {
			url: "/idea-detail-question",
			templateUrl: "views/idea-detail-question.html"
		})
});
