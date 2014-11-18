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

/** 渲染每个项.  */
app.directive("ideasaleitem", function() {
    return {
        restrict:"AE",
        templateUrl:"views/idea_sites/sale_item.html"
    }
});

