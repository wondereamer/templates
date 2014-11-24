/** 定义全局变量的区域，通常与Body挂钩。 */
app.controller('ApplicationController', ['$scope', '$http', 'USER_ROLES', 'AuthService', function ($scope,$http,USER_ROLES,AuthService) {
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = AuthService.isAuthorized;
	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	};
	$scope.hot={
		num_liked :''
	};
	//获取商店首页商品
//	$scope.getShop = function() {
//		console.log("获取商品中。。。");
//		return $http
//			.get('http://120.24.53.101/shop/')
//			.then(function(res) {
//				$scope.rr=res.data;
//				console.log(res.data);
//				console.log(rr);
//			}, function(res) {
//				console.log("获取失败");
//			});
//	};
}]);

/**  登录，注销，注册 */
app.controller('authController',['$scope','$location','$rootScope','$http','AUTH_EVENTS','AuthService',
	function ($scope, $location, $rootScope, $http, AUTH_EVENTS, AuthService) {
	$scope.credentials = {
		username: 'admin',
		password: 'wdj123'
	};
	$scope.user = {
		username: '张三是张三',
		email: '12345678@qq.com',
		password1: '123456',
		password2: '123456',
	}
	$scope.login = function(credentials) {
		console.log(credentials);
		AuthService.login(credentials)
			.then(function(user) {
				$("#login").modal("toggle");
				$scope.setCurrentUser(user);
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$location.path('/');
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
			$location.path('/');
		});
		/*AuthService.login(credentials).then(function (user) {*/
		/*$("#login").modal("toggle");*/
		/*$scope.setCurrentUser(user);*/
		/*$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);*/
		/*$location.path('/');*/
		/*}, function () {*/
		/*$rootScope.$broadcast(AUTH_EVENTS.loginFailed);*/
		/*alert("错误的用户名或密码");*/
		/*});*/
	};
	/**
	 * 注册用户
	 * @param {对象} user 用户信息，包括：用户名，邮箱，密码。
	 */
    $scope.register = function(user) {
	if (!user.agree) {
		alert("请同意服务协议");
	} else {
		console.log(user);
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.post('/accounts/api/register/', $.param(user))
			.then(function(res) {
				/// @todo 返回数据
				/*return res.data.user;*/
				$("#register").modal("toggle");
				$("#activate").modal();
				var emailSplit = user.email.split("@");
				emailSplit[0] = "mail";
				user.activate = emailSplit[0] + "." + emailSplit[1];
				alert(res.data.user);
			}, function(res) {
				alert("无法连接至网络");
			});
	};
};
}]);

app.controller('personalController', ['$scope', '$http', 'Session', function($scope, $http, Session) {
	$scope.user={
		
	}
	/** 修改账户信息 */
	$scope.modifyAuth = function(user) {
		console.log("修改帐号信息,参数：");
		console.log(user);
		$http.defaults.headers.put['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.put('/accounts/api/user/' + Session.userId + '/', $.param(user))
			.then(function(res) {
				/// @todo 验证邮箱的唯一性。
				alert("修改成功！");
			}, function(res) {});
	};
	/**  获取账户信息 */
	$scope.getAuth = function() {
		console.log("获取帐号信息。。");
		return $http
			.get('/accounts/api/user/' + Session.userId + '/')
			.then(function(res) {
				/// @todo 验证邮箱的唯一性。
				console.log(res.data);
			}, function(res) {
				/*alert("个人帐号获取失败!") */
			});
	}
}]);

app.controller('shopController', ['$scope', '$http', function($scope,$http){
	$scope.product=[
		{
		"img":"../img/01-233.jpg",
		"title":"一个优秀的产off方法是跟还发士大夫",
		"price":"39",
		"like":"458",
		"sales":"589"
		},
		{
		"img":"../img/02-233.jpg",
		"title":"高富帅尽管房价很高国防技术规范设计",
		"price":"81",
		"like":"858",
		"sales":"239"
		},
		{
		"img":"../img/03-233.jpg",
		"title":"奉公守法官方公开揭露撒发货的刷卡积分活动看",
		"price":"89",
		"like":"258",
		"sales":"219"
		},
		{
		"img":"../img/04-233.jpg",
		"title":"beg居然会根据个人文集个就会感到愧疚",
		"price":"79",
		"like":"4558",
		"sales":"6139"
		},
		{
		"img":"../img/03-233.jpg",
		"title":"可减少人口的结果回来看管好价格好疯狂回归看到",
		"price":"49",
		"like":"958",
		"sales":"259"
		},
		{
		"img":"../img/01-233.jpg",
		"title":"一个优秀的产off方法是跟还发士大夫",
		"price":"39",
		"like":"458",
		"sales":"589"
		},
		{
		"img":"../img/02-233.jpg",
		"title":"高富帅尽管房价很高国防技术规范设计",
		"price":"81",
		"like":"858",
		"sales":"239"
		},
		{
		"img":"../img/03-233.jpg",
		"title":"奉公守法官方公开揭露撒发货的刷卡积分活动看",
		"price":"89",
		"like":"258",
		"sales":"219"
		},
		{
		"img":"../img/04-233.jpg",
		"title":"beg居然会根据个人文集个就会感到愧疚",
		"price":"79",
		"like":"4558",
		"sales":"6139"
		},
		{
		"img":"../img/03-233.jpg",
		"title":"可减少人口的结果回来看管好价格好疯狂回归看到",
		"price":"49",
		"like":"958",
		"sales":"259"
		}
	];
	$scope.getShopNew=function(){
		return $http
		.get('http://120.24.53.101/shop/latest/')
		.then(function(res){
			$scope.products=res.data;
			console.log($scope.products);
		},function(){
			console.log("获取成功");
		});
	};
	$scope.getShopHot=function(){
		return $http
		.get('http://120.24.53.101/shop/hot/')
		.then(function(res){
			console.log(res.data);
		},function(){
			console.log("获取成功");
		});
	};
}]);
//发起创意步骤
app.controller("submitIdeaController",["$scope","$http",function($scope,$http){
	$scope.idea={
		type:"健康医疗",
		title:"生活是官方说法更加广泛",
		introduction:"事实告诉我们，能够真正服务于生活的创意才是我们要寻找的好设计。为此我们建立了一个投票环节，在这里，你所喜欢、支持的创意都有可能制作成产品并成功上市。一个好创意诞生很不容易，希望你们成为优秀的评审团。",
		label:"生活创意",
		detail:"设计一款可根据按钮自由伸缩的耳塞装置，避免耳塞在使用后无处安放、使用前各种整理等问题，该装置大小控制在4-7cm范围内，比如5*5cm，越小巧越方便携带，装置的形状可以是云朵、叶子、花瓣等，也可根据个人爱好私人定制形状，装置的一面设置按钮，按钮位置视各个具体形状而定，一般设计在绕线处的轴心位置，轴心处的另一面，也就是装置的另一面，设置成耳塞插头的出口，出口处边缘以外的旁白部分可印制图案或产品标识，私人定制形状可印制个人喜欢图案。",
		video:"http://v.youku.com/v_show/id_XNjMyMDU2Nzgw.html?from=y1.3-music-new-4344-10220.91968-90792-90602.1-4"	
	};
	$scope.submitIdea=function(idea){
		console.log(idea);
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.post('/accounts/api/submitIdea/', $.param(idea))
			.then(function(response) {
				/// @todo 返回数据
				console.log("提交成功");
			},
			function(response) {
				console.log("提交失败");
			});
	};
}]);
//修改个人信息
app.controller("userInfoController",["$scope","$http",function($scope,$http){
	$scope.user={
		name:"王大锤",
		sex:"男",
		job:"WEB前端工程师",
		city:"深圳",
		email:"123@126.com",
		phone:"18623435353",
		address:"深圳市南山区华侨城创意园",
		star:"超级英雄",
		briefing:"我是一个好人"
	};
	$scope.changUserInfo=function(user){
		console.log(user);
		$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
		return $http
			.post('/accounts/api/abc/')
			.then(function(dd) {
				/// @todo 返回数据
				console.log("修改成功");
			},
			function(dd) {
				console.log("提交失败");
			});
	};
}]);
