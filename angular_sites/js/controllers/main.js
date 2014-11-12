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
