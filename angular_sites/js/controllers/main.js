/** 定义全局变量的区域，通常与Body挂钩。 */
app.controller('ApplicationController',
               ['$scope','$rootScope', '$http', 'USER_ROLES','AUTH_EVENTS', 'AuthService', 'Session',
               function ($rootScope, $scope,$http,USER_ROLES,AuthService, AUTH_EVENTS, Session) {
    // 由服务器控制的变量值，当网站由传统方式切换到angular框架的时候用来设置用户是否已经登录。
  	$scope.urlApi="";
  	$scope.imgUrl="";
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = AuthService.isAuthorized;
	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	};
    // 统页面的用户验证传播到angular框架
    if (global_user) {
        $scope.currentUser=global_user
        Session.create(0, global_user.id, global_user.role);
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    };
}]);

/**  登录，注销，注册 */
app.controller('authController',['$scope','$location','$rootScope','$http','AUTH_EVENTS','AuthService',
	function ($scope, $location, $rootScope, $http, AUTH_EVENTS, AuthService) {
	$scope.credentials = {
		username: '1234567',
		password: '1234567'
	};
	$scope.user = {
		username: 'wwwwww',
		email: '33830957@qq.com',
		password1: 'wwwwww',
		password2: 'wwwwww',
	};
	$scope.login = function(credentials) {
		console.log(credentials);
		AuthService.login(credentials)
			.then(function(user) {
				$("#login").modal("toggle");
                alert('ok');
				$scope.setCurrentUser(user);
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                /*window.location.href = "/#/index";*/

			}, function() {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				alert("错误的用户名或密码");
			});
	};

	$scope.logout = function() {
		/// @todo remove Session
		AuthService.logout().then(function(user) {
			$scope.setCurrentUser(null);
			$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            /*$location.path('/');*/
            /*window.location.href = "/#/index";*/
            window.location.href = "/";
		});
	};
	/**
	 * 注册用户
	 * @param {对象} user 用户信息，包括：用户名，邮箱，密码。
	 */
	$scope.register = function(user) {
		if (!user.agree) {
			alert("请同意服务协议");
		}
		else {
			console.log(user);
			$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
			return $http
				.post($scope.urlApi + '/accounts/api/register/', $.param(user))
				.then(function() {
					$("#register").modal("toggle");
					$("#activate").modal();
					var emailSplit = user.email.split("@");
					emailSplit[0] = "mail";
					user.activate = emailSplit[0] + "." + emailSplit[1];
				}, function() {
					alert("注册失败");
				});
		};
	};
	// 用户建议
	$scope.suggest = function(userSuggest){
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		console.log(userSuggest);
		return $http
			.post($scope.urlApi + '/accounts/api/userSuggest/', $.param(userSuggest))
			.then(function() {
				$("#suggest").modal("toggle");
			}, function() {
				alert("提交失败");
			});
	};
	//连接服务器验证用户名唯一性
	$scope.onlyUserName = function(userName) {
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		var user={
			username: userName
		};
        console.log("验证用户的唯一性");
		console.log(user);
		return $http
			.post($scope.urlApi + '/accounts/api/unique_user/', $.param(user))
			.then(function() {
				$scope.isUserName=true;
                console.log("用户验证服务正常。");
			}, function() {
				$scope.isUserName=false;
                console.log("用户验证服务错误！");
			});
	};

	//连接服务器验证邮箱唯一性
	$scope.onlyEmail = function(userEmail) {
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		var user={
			email: userEmail
		};
		console.log(user);
		return $http
			.post($scope.urlApi + '/accounts/api/unique_email/', $.param(user))
			.then(function() {
				$scope.isEmail=true;
			}, function() {
				$scope.isEmail=false;
			});
	};

}]);

app.controller('personalController', ['$scope', '$http', 'Session', function($scope, $http, Session) {
	/** 修改账户信息 */
	$scope.modifyAuth = function(user) {
		console.log("修改帐号信息,参数：");
		console.log(user);
		$http.defaults.headers.put['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.put($scope.urlApi + '/accounts/api/user/' + Session.userId + '/', $.param(user))
			.then(function(res) {
				/// @todo 验证邮箱的唯一性。
				console.log("修改成功！");
			}, function(res) {
				console.log("修改失败");
			});
	};
	/**  获取账户信息 */
	$scope.getAuth = function() {
		console.log("获取帐号信息。。");
		return $http
			.get($scope.urlApi + '/accounts/api/user/' + Session.userId + '/')
			.then(function(res) {
				$scope.user=res.data;
				console.log(res.data);
			}, function(res) {
				console.log("个人帐号获取失败!");
			});
	};
	// 获取用户资料
	$scope.getUserInfo = function() {
		console.log("获取用户资料中...");
		return $http
			.get($scope.urlApi + '/accounts/api/profile/' + Session.userId + '/')
			.then(function(res) {
				$scope.user=res.data;
				console.log($scope.user);
			}, function(res) {
				console.log("个人资料获取失败!");
			});
	};
	// 提交用户资料
	$scope.putUserInfo = function(user){
		$http.defaults.headers.put['X-CSRFToken'] = getCookie("csrftoken");
		console.log(user);
		return $http
			.put($scope.urlApi + '/accounts/api/profile/' + Session.userId + '/', $.param(user))
			.then(function() {
				console.log("保存成功");
			}, function() {
				console.log("提交失败");
			});
	};
	//连接服务器验证邮箱唯一性
	$scope.onlyEmail = function(userEmail) {
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		var user={
			email: userEmail
		};
		console.log(user);
		return $http
			.post($scope.urlApi + '/accounts/api/unique_email/', $.param(user))
			.then(function() {
				$scope.isEmail=true;
			}, function() {
				$scope.isEmail=false;
			});
	};
}]);

var shop = angular.module("shop", []);
shop.controller("shopController", ["$scope", "$http", "$stateParams", function($scope, $http, $stateParams) {
	//获取商店首页商品
	$scope.getShop = function() {
		console.log("获取商店首页商品...");
		return $http.get($scope.urlApi + "/shop/")
			.then(function(res) {
				$scope.latests = res.data.latest;
				$scope.hots = res.data.hot;
				console.log($scope.latests);
				console.log($scope.hots);
			}, function(res) {
				console.log("Failed!");
			});
	};
	$scope.getShop();
	//获取最新商品
	$scope.getShopLatest = function() {
		console.log("获取最新商品...");
		return $http
			.get($scope.urlApi + "/shop/latest/")
			.then(function(res) {
				$scope.latests = res.data;
				console.log($scope.latests);
			}, function() {
				console.log("获取失败");
			});
	};
	//获取最热商品
	$scope.getShopHot = function() {
		console.log("获取最热商品...");
		return $http
			.get($scope.urlApi + "/shop/hot/")
			.then(function(res) {
				$scope.hots = res.data;
				console.log($scope.hots);
			}, function() {
				console.log("获取失败");
			});
	};
	//获取分类商品
	$scope.getShopType = function(typeId) {
		console.log("获取第"+ typeId +"个分类商品...");
		return $http
			.get($scope.urlApi + "/shop/" + typeId + "/")
			.then(function(res) {
				$scope.types = res.data;
			}, function() {
				console.log("获取失败");
			});
	};
	//获取商品详情
	$scope.getShopDetail = function(id) {
		console.log("获取第"+id+"个商品详情中...");
		return $http
			.get($scope.urlApi + "/shop_product/" + id + "/")
			.then(function(res) {
				$scope.details=res.data.product;
				console.log($scope.details);
			}, function(res) {
				console.log("获取失败!");
			});
	};
}]);

var fever = angular.module("fever", []);
fever.controller("feverController",["$scope", "$http", function($scope,$http){
	//获取发现创意首页商品
	$scope.getFever = function() {
		console.log("获取发现创意首页商品");
		$http.get($scope.urlApi + "/fever/")
			.then(function(res) {
				$scope.fevers=res.data.hot;
				console.log($scope.fevers);
			}, function(res) {
				console.log("Failed!");
			});
	};
	$scope.getFever();
	//获取全部创意商品
	$scope.getFeverType = function(key) {
		console.log("获取第" + key + '分类创意商品...');
		return $http
			.get($scope.urlApi + '/fever/' + key + '/')
			.then(function(res) {
				$scope.types = res.data;
				console.log($scope.types);
			}, function() {
				console.log("获取失败");
			});
	};
	$scope.getFeverLatest = function() {
		console.log("获取最新创意商品...");
		return $http
			.get($scope.urlApi + "/fever/latest/")
			.then(function(res) {
				$scope.latests = res.data;
				console.log($scope.latests);
			}, function() {
				console.log("获取失败");
			});
	};
	$scope.getFeverSuccess = function() {
		console.log("获取成功案例创意商品...");
		return $http
			.get($scope.urlApi + "/fever/hot/")
			.then(function(res) {
				$scope.successes = res.data;
				console.log($scope.successes);
			}, function() {
				console.log("获取失败");
			});
	};
}]);

//发起创意步骤
app.controller("submitIdeaController",["$scope","$http",function($scope,$http){
	$scope.idea={
		type:"健康医疗",
		title:"生活是官方说法更加广泛",
		introduction:"事实告诉我成为优秀的评审团。",
		label :"生活创意",
        detail: "temp",
		video:"http://v.youku.com/v_show/id_XNjMyMDU2Nzgw.html?from=y1.3-music-new-4344-10220.91968-90792-90602.1-4"
	};
	$scope.submitIdea=function(idea){
        idea.detail = tiny_data();
		console.log(idea);
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.post('/submit_idea/', $.param(idea))
			.then(function(response) {
				/// @todo 返回数据
				alert("提交成功");
			},function(response) {
				alert("提交失败");
			});
	};
}]);

// 商店商品详情页
app.controller('shopDetailController', ['$scope','$http', function($scope, $http){
	// 主图TAB切换
	$scope.index=0;
	$scope.imgHover=function($index){
		$scope.index=$index;
	};
}]);



