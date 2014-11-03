var app = app || {};
// 路由触发标志，用来避免获取无谓的数据。
var RooterTriggered = false;
// 是否是客户端开发模式。
var TEST = true;
/**
 * 路由
 * @constructor
 * @extends {Backbone.Router}
 */
var TodoRouter = Backbone.Router.extend({
    /* define the route and function maps for this router */ 
    routes: {
            "sale" : "showSale",
            "preSale" : "showPreSale",
            "fever" : "showFever",
            "bbs" : "showBBS",
            "search/:query" : "searchTodos",
            "search/:query/p:page" : "searchTodos"
    },

    showSale: function(){ 
        console.log("showSale");
        // fetch data from server
        // render data
        if (TEST) {
            var books = [
                { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford',
                    releaseDate: '2008', keywords: 'JavaScript Programming' },
                { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw',
                    releaseDate: '2012', keywords: 'CoffeeScript Programming' },
                { title: 'Scala for the Impatient', author: 'Cay S. Horstmann',
                    releaseDate: '2012', keywords: 'Scala Programming' },
                { title: 'American Psycho', author: 'Bret Easton Ellis',
                    releaseDate: '1991', keywords: 'Novel Splatter' },
                { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke',
                    releaseDate: '2011', keywords: 'JavaScript Programming' }
            ];
            new app.ListView(books); 
        } else {
            new app.ListView( ); 
        }
    },

    showPreSale: function(){ 
        console.log("showPreSale");
        // fetch data from server
        // render data
    },

    showFever: function(){ 
        console.log("showFever");
        // fetch data from server
        // render data
    },

    showBBS: function(){ 
        console.log("showBBS");
        // fetch data from server
        // render data
    },

    searchTodos: function(query, page){
        var page_number =  page || 1;
        console.log("Page number: " + page_number + " of the results for todos containing the word: " + query);
    }
});
var myTodoRouter = new TodoRouter();
myTodoRouter.on('route', function(name, args){ 
     RooterTriggered=true;
});
Backbone.history.start();
