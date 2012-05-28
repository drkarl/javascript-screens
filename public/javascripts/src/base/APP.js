var APP = {
    screenFactory : new ScreenFactory,
    router : null,
    menu : new Menu,
    menuRouter : new Router,
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
    initMenu : function(element_selector) {
        this.menuRouter.setSelector(element_selector);
    },
    init : function(appName, element_selector) {
        this.router = new Router(appName);
        this.setSelector(element_selector);
        this.screenFactory.initRoutes();
        this.menuRouter.run(window.location.pathname);
        this.router.run(window.location.pathname);
    },
    toRoute : function(route) {
        this.router.trigger(route);
    }

};