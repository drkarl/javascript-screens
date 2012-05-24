    var ScreenFactory = Class.extend({

    init: function(){
        this.screens = new Array();
    },

    getScreen: function(name) {
        return this.screens[name] != undefined ? this.screens[name] : this.createScreen(name);
    },

    register : function(className, classObject) {
        this.screens[className] = classObject;
    },

    initRoutes : function() {
        for (var key in this.screens) {
            this.screens[key].addRoute();
        }
    }

});