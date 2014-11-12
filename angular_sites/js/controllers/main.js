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

app.controller('FormController', function ($scope, $location, $rootScope, $http, AUTH_EVENTS, AuthService) {
    $scope.test = "ooooo";
    $scope.login = function(user){ 
        alert($scope.user.password);
    };
    $scope.credentials = {
        username: 'wdj',
        password: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
            $location.path('/');
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            alert("登录失败！");
        });
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


app.controller('productListCtrl',function($scope,$http){
	$http.get('/data/products.json')
	.success(function(response){
		$scope.list=response;
	});
});

app.controller('registerCtrl',function($scope){
	$scope.submitted=true;
	$scope.registerForm=function(){
		alert('注册成功。');
	};
});
