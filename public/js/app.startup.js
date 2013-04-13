// -- Browser Script
(function (win, $, _, Hogan, tmpls) {

    var Nodeject = require("nodeject"),
        container = new Nodeject(),
        app = require("./app.js"),
        // define modules
        ProfipsumModule = require("./configuration/profipsumModule.js").configure(container);

    container.define({ name : "jquery",    type : function () { return $; }, singleton: true })
        .define({ name : "_",              type : function () { return _; }, singleton : true })
        .define({ name : "templates",      type : function () { return tmpls; }, singleton: true })
        .define({ name : "app",            type : app.create, singleton : true, deps: ["templates"] })
        .define({ name : "bus",            type : function (app) { return app.bus; }, singleton: true, deps: ["app"] })
        .define({ name : "store",          type : function (app) { return app.store; }, singleton: true, deps: ["app"] })
        .define({ name : "bootstrap",      type: function (app) {
            app.presenters = container.resolve({ category : "presenters", format : "literal" });
            app.controllers = container.resolve({ category : "controllers", format : "literal" });

            app.container = container;
            app.noop = function (){};

            return app;
        }, deps: ["app"]
    });

    if (!("app" in win)) {
        win.app = container.resolve("bootstrap");
    }

    if (!("require" in win)) {
        win.require = require;
    }

})(window, jQuery, _, Hogan, templates);

$(function () {
    app.bus.emit("app::init");
});