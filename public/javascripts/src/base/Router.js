var Router = Class.extend({
    templatePath : '/assets/templates/',
    localsPath : '/assets/locals/',
    element_selector : null,
    main : null,
    appName : null,

    init: function(appName){
        this.appName = appName;
    },

    setSelector : function(selector) {
        this.element_selector = selector;
    },

    addRoute : function(className, route, title, callback,  screen, useTitle) {
        var self = this;
        var language = navigator.language;
        var localeFilePath = this.localsPath+language+"/"+className+"_i18n.json";

        this.main = $.sammy(this.element_selector, function() {
            this.use(Sammy.Haml);

            if (useTitle) {
                this.use(Sammy.Title);
                this.setTitle(self.appName);
            }

            this.cache_partials = true;

            this.get(route, function() {
                    var sammyObject = this;
                    if (useTitle) {
                        this.title(title);
                    }
                    //Recupera fichero i18n
                    this.load(localeFilePath)
                        .then(function(i18nData) {
                            //Renderiza template con los copys i18n
                            sammyObject.partial(self.templatePath+className+".haml", i18nData, function(context){
                                callback.call(screen);
                        });
                    });
            });
            this.bind(route, function() {
                this.redirect(route);
            });
        });
    },

    trigger : function(toRoute) {
        this.main.trigger(toRoute);
    },

    run : function(route) {
        this.main.run(route);
    }

});
