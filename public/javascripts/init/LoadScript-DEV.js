function load() {
    $LAB
    .script("/assets/javascripts/lib/haml/haml.js").wait()
    .script("/assets/javascripts/lib/sammy/sammy.js").wait()
    .script("/assets/javascripts/lib/sammy/sammy.haml.js")
    .script("/assets/javascripts/lib/sammy/sammy.title.js")
    .script("/assets/javascripts/lib/knockout/knockout-latest.js").wait()
    .script("/assets/javascripts/lib/knockout/knockout.mapping-latest.js").wait()
    .script("/assets/javascripts/lib/knockout/knockout.unobtrusive.js")
    .script("/assets/javascripts/lib/Class/Class.js").wait()
    .script("/assets/javascripts/src/base/Router.js").wait()
    .script("/assets/javascripts/src/base/Screen.js").wait()
    .script("/assets/javascripts/src/screens/Menu.js")
    .script("/assets/javascripts/src/base/ScreenFactory.js").wait()
    .script("/assets/javascripts/src/base/APP.js")
    .script("/assets/javascripts/plugins.js")
    .script("/assets/javascripts/script.js").wait()
    .script("/assets/javascripts/src/screens/Index.js")
    .script("/assets/javascripts/src/screens/Content.js")
    .wait(
        function() {
            $(function() {
                APP.setBindings({
                    text: ['thisName', 'thatName']
                });
                APP.register("index", new Index());
                APP.register("content", new Content());
                APP.initMenu("#topmenu");
                APP.init("My app - ","#main");
            });
        }
    );
}
