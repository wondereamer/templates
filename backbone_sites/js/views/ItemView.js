var app = app || {};
app.ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'Item',
    /*events: {*/
    /*'click .delete': 'deleteBook'*/
    /*},*/

    render: function() {
        $("#SaleProductTemplate").load("js/templates/bbs.html");
        var template= _.template( $('#SaleProductTemplate').html() );
        this.$el.html( template( this.model.toJSON() ));
        return this; 
    },

    /*deleteBook: function() { */
    /*this.model.destroy();*/
    /*this.remove();*/
    /*},*/
});
