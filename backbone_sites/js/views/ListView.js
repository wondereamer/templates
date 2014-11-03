var app = app || {};
app.ListView = Backbone.View.extend({
    el: '#shop_products_view',
/*events: {*/
/*'click #add':'addBook',*/
/*},*/
    initialize: function(initialItems) {
        console.log("initListView");
        if (arguments.length == 1) {
            this.collection = new app.SaleProducts( initialItems );
        } else {
            this.collection = new app.SaleProducts();
            this.collection.fetch()
        };
        this.listenTo( this.collection, 'add', this.renderItem );
        this.render();
    },

    render: function() { 
        this.collection.each(function(item) { this.renderItem( item ); }, this );
        /*template: _.template( $('#SaleProductTemplate').html() ),*/
    },

    renderItem: function( item ) {
        console.log("renderItem");
        var itemView = new app.ItemView({ model: item });
        this.$el.append( itemView.render().el ); 
    },

    /*addBook: function( e ) {*/
    /*e.preventDefault();*/
    /*var formData = {};*/
    /*$( '#addBook div' ).children( 'input' ).each( function( i, el ) { */
    /*if( $( el ).val() != '' ){*/
    /*formData[ el.id ] = $( el ).val();*/
    /*}*/
    /*});*/
/*this.collection.add( new app.Book( formData ) ); */
/*},*/
});
