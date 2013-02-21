(function (win, $, _, Hogan, tmpls){

    if (!('app' in win)){
        var cache = {};
        win.app = {
            bus : new EventEmitter2({
                "delimeter" : "::",
                "wildcard" : "*"
            }),
            store : {
                get : function (key){
                    return cache[key];
                },
                set : function (key, value){
                    cache[key] = value;
                }
            },
            templates : tmpls,
            noop : function (){}
        };

        // -- Setup Operations
        win.app.operations = {
            ipsum: IpsumPresenter.create(_, win.app.store)
        };

        // -- Setup Controllers
        win.app.controllers = {
            ipsum: IpsumController.create(_, win.app.bus, win.app.operations.ipsum)
        };

        // -- Setup Presenters
        if("app" in win){
        console.log(win.app.bus);
        win.app.presenters = {
            ipsum: IpsumPresenter.create($, _, win.app.bus, win.app.templates)
        };
        }
    }

})(window, jQuery, _, Hogan, templates);


$(function (){
    // -- Seed data, since we don't have a persistent store.
    // app.operations.todo.add({ name : "Item 1", description : "Description here."}, app.noop);
    // app.operations.todo.add({ name : "Item 2", description : "Description here."}, app.noop);
    // app.operations.todo.add({ name : "Item 3", description : "Description here."}, app.noop);

    // -- Init the view
    app.bus.emit("app::init", app.noop);
});