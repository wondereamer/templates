var app = app || {};
app.SaleProducts = Backbone.Collection.extend({
    url: '/sale_products/',
    model: app.SaleProduct
});
