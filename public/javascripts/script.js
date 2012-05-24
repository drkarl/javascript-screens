/* Author:

*/

var APP = {
    screenFactory : new ScreenFactory(),
    router : new Router,
    bindings : null,

    setBindings : function(bindingObject){
      this.bindings = bindingObject;
    },
    setSelector : function(element_selector) {
        this.router.setSelector(element_selector);
    },
    register : function(key, classObject) {
        this.screenFactory.register(key, classObject);
    },
    init : function(element_selector) {
        this.setSelector(element_selector);
        this.screenFactory.initRoutes();
        this.router.run("#/");
    },
    toRoute : function(route) {
        this.router.trigger(route);
    }

};