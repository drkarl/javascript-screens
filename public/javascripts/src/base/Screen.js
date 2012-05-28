var Screen = Class.extend({
    element_selector: null,
    sammy : null,
    self : null,
    className : null,
    templatePath : null,
    localsPath : null,
    viewModel: null,
    localsViewModel : null,
    route : null,
    assetsPath : '/assets',
    title : null,

    init: function(className, route, title){
        self = this;
        this.className = className;
        this.route = route;
        this.title = title;
    },

    setup : function() {
        this.enableClickEvents();
    },

    addRoute : function() {
        APP.menuRouter.addRoute('Menu', this.route, '', this.templateRendered, this, false);
        APP.router.addRoute(this.className, this.route, this.title, this.templateRendered, this, true);
    },

    enableClickEvents : function(){
        var links = $('.link');
        links.each(function(){
            var buttonId = $(this).attr('id');
            $(this).click(function(){
                APP.screenFactory.getScreen(buttonId).toRoute();
            })
        });
    },

    populateData : function(data) {
        this.viewModel = ko.mapping.toJS(data);
        ko.unobtrusive.createBindings(APP.bindings);
        ko.applyBindings(this.viewModel);
    },

    templateRendered : function() {
        this.populateData();
        this.enableClickEvents();
    },

    toRoute : function() {
        APP.toRoute(this.route);
        this.setup();
    }

});
