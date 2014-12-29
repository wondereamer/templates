/** 定义全局变量的区域，通常与Body挂钩。 */
app.controller('ApplicationController',
               ['$scope','$rootScope', '$http', 'USER_ROLES','AUTH_EVENTS', 'AuthService', 'Session',
               function ($rootScope, $scope,$http,USER_ROLES,AuthService, AUTH_EVENTS, Session) {
    // 由服务器控制的变量值，当网站由传统方式切换到angular框架的时候用来设置用户是否已经登录。
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = AuthService.isAuthorized;
	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	};
    /*// 统页面的用户验证传播到angular框架*/
    /*if (global_user) {*/
    /*$scope.currentUser=global_user*/
    /*Session.create(0, global_user.id, global_user.role);*/
    /*$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);*/
    /*};*/

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
			return $http
				.post('/accounts/api/register/', $.param(user), {xsrfCookieName: 'csrftoken'})
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

	//连接服务器验证用户名唯一性
	$scope.onlyUserName = function(userName) {
		var user={
			username: userName
		};
        console.log("验证用户的唯一性");
		console.log(user);
        console.log($.param(user))
		return $http
			.post('/accounts/api/unique_user/', $.param(user), {xsrfCookieName: 'csrftoken'})
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
		var user={
			email: userEmail
		};
		console.log(user);
		return $http
			.post('/accounts/api/unique_email/', $.param(user), {xsrfCookieName: 'csrftoken'})
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
		return $http
			.put('/accounts/api/user/' + Session.userId + '/', $.param(user), {xsrfCookieName: 'csrftoken'})
			.then(function(res) {
				/// @todo 验证邮箱的唯一性。
				$scope.setOk=true;
				$scope.setFail=false;
				console.log("修改成功！");
			}, function(res) {
				$scope.setOk=false;
				$scope.setFail=true;
				console.log("修改失败");
			});
	};
	/**  获取账户信息 */
	$scope.getAuth = function() {
		console.log("获取帐号信息。。");
		return $http
			.get('/accounts/api/user/' + Session.userId + '/')
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
			.get('/accounts/api/profile/' + Session.userId + '/')
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
			.put('/accounts/api/profile/' + Session.userId + '/', $.param(user))
			.then(function() {
				$scope.saveOk=true;
				$scope.saveFail=false;
				console.log("保存成功");
			}, function() {
				$scope.saveOk=false;
				$scope.saveFail=true;
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
			.post('/accounts/api/unique_email/', $.param(user))
			.then(function() {
				$scope.isEmail=true;
			}, function() {
				$scope.isEmail=false;
			});
	};
}]);


//发起创意步骤
app.controller("submitIdeaController",["$scope", "$http", function($scope, $http){
	$scope.idea={
		cat:"1",
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
			.then(function() {
				alert("提交成功");
			},function() {
				alert("提交失败");
			});
	};
	// $scope.deleteImg=function(delUrl){
	// 	$http.defaults.headers.post['X-CSRFToken'] = getCookie("csrftoken");
	// 	console.log(delUrl);
	// 	return $http
	// 			.delete(delUrl)
	// 			.then(function(){
	// 				alert("删除成功");
	// 			},function(){
	// 				alert("删除失败");
	// 			});
	// };
}]);
