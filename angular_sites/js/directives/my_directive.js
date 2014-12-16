/**
 * 创意产品网格视图，可以与不同的项视图结合使用。
 * 组合成商店，预售商店，投票商店。
 */
app.directive("ideashopgridview", function() {
    return {
        restrict:"AE",
        /*templateUrl:"views/idea_sites/idea_gridview.html",*/
        template: '<div class="container" id="product-three-columns"' +
                       '<div ng-transclude></div>' +
                  '</div>',
        transclude: true,
        link: function(scope, element, attrs) {
            scope.items = scope.loadData();
        }
    }
});

//失去焦点是验证表单
// app.directive("myFocus", function() {
//     return{
//     	require: 'ngModel',
//         restrict: "AE",
//         link:function(scope,element,attrs,ngModel){
//         	if(!ngModel) return;
//         	ngModel.$focused = false;
//         	element.bind("focus",function(){
//                 scope.$apply(function() {
//                     ngModel.$focused = true;
//                 });
//         	}).bind("blur",function(){
//                 scope.$apply(function() {
//                     ngModel.$focused = false;
//                 });
//         	});
//         }
//     };
// });

// 查看已输入的密码
app.directive("myPassword",function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.on("mousedown",function(){
                $("#pw0").attr('type','text');
            }).on("mousemove", function(){
                $("#pw0").attr('type','password');
            });
        }
    };
});
app.directive("newPassword",function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.on("mousedown",function(){
                $("#npw").attr('type','text');
            }).on("mousemove", function(){
                $("#npw").attr('type','password');
            });
        }
    };
});
app.directive("confirmPassword",function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.on("mousedown",function(){
                $("#cpw").attr('type','text');
            }).on("mousemove", function(){
                $("#cpw").attr('type','password');
            });
        }
    };
});

// 点赞
app.directive("iLike", function(){
    var count=0;
    return{
        restrict: "A",
        scope: true,
        link: function(scope, element, attrs){
            element.on("click", function(){
                if(count==0){
                    $(this).removeClass('btn-primary').addClass('btn-danger');
                    scope.feverLike(scope.details.actual_like = scope.details.actual_like + 1);
                    count++;
                }
                else{
                    $(this).removeClass('btn-danger').addClass('btn-primary');
                    scope.feverLike(scope.details.actual_like = scope.details.actual_like - 1);
                    count--;
                }
            });
        }
    };
});