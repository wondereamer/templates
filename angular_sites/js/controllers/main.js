app.controller('SaleController', ['$scope','Restangular', function($scope, Restangular) {
    $scope.testData = [
        {price:'1000', like:'300'},
        {price:'2000', like:'400'}
    ];
    $scope.loadData = function(){ 
        var User = Restangular.all('users');
        var allUsers = User.getList();
        return $scope.testData;         
    };
}]);

/** 定义全局变量的区域，通常与Body挂钩。 */
app.controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', function ($scope,
                                               USER_ROLES,
                                               AuthService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
  $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
  };
}]);

/**  登录，注销，注册 */
app.controller('authController', ['$scope', '$location', '$rootScope', '$http', 
              'AUTH_EVENTS', 'AuthService', function ($scope, $location, $rootScope, $http, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username: 'admin',
        password: 'wdj123'
    };

    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $("#login").modal("toggle");
            $scope.setCurrentUser(user);
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $location.path('/');
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            alert("错误的用户名或密码");
        });
    };

    $scope.logout = function () {
        /// @todo remove Session
        AuthService.logout().then(function (user) {
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
        $http.defaults.headers.post['X-CSRFToken'] =  getCookie("csrftoken");
        return $http
          .post('/accounts/register/', $.param(user))
          .then(function (res) {
              /// @todo 返回数据
              /*return res.data.user;*/
            alert(res.data);
          });
    };
}]);

app.controller('personalController', ['$scope', '$http', 'Session', function($scope, $http, Session) {
    /** 修改账户信息 */
   $scope.user={
   		name:'张三'
   }
    $scope.modifyAuth = function(user){ 
        console.log("修改帐号信息,参数：");
        console.log(user);
        $http.defaults.headers.post['X-CSRFToken'] =  getCookie("csrftoken");
        return $http
          .post('/accounts/update/auth/', $.param(user))
          .then(function (res) {
              /// @todo 验证邮箱的唯一性。
              alert("修改成功！");
          }, function(res){ 
          });
    };
    /**  获取账户信息 */
    $scope.getAuth = function(){
        console.log("获取帐号信息。。");
        return $http
          .get('/accounts/update/auth/' + Session.userId)
          .then(function (res) {
              /// @todo 验证邮箱的唯一性。
              
              console.log(res.data);
          }, function(res){ 
              /*alert("个人帐号获取失败!") */
          });
    }
}]);

app.controller('productListCtrl', ['$scope', '$http', function($scope,$http){
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
//	$http.get('/data/products.json')
//	.success(function(response){
//		$scope.list=response;
//	});
}]);

app.controller('registerCtrl', ['$scope', function($scope){
	$scope.submitted=true;
	$scope.registerForm=function(){
		alert('注册成功。');
	};
}]);

