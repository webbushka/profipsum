;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
var ProfiupsumModule = (function () {
	return {
		configure: function (container) {
			container.define({
				name: "profipsumOperation",
				type: require("../operations/profipsumOperation.js").create,
				category: "operations",
				singleton: true,
				deps: ["_", "store"]
			})
				.define({
				name: "profipsumController",
				type: require("../controllers/profipsumController.js").create,
				category: "controllers",
				deps: ["_", "bus", "profipsumOperation"]
			})
				.define({
				name: "profipsumPresenter",
				type: require("../presenters/profipsumPresenter.js").create,
				category: "presenters",
				deps: ["jquery", "_", "bus", "templates"]
			});
		}
	};
})();

module.exports = ProfiupsumModule;
},{"../operations/profipsumOperation.js":2,"../controllers/profipsumController.js":3,"../presenters/profipsumPresenter.js":4}],2:[function(require,module,exports){
var pojoClone = function (item) {
	return JSON.parse(JSON.stringify(item));
};

var ProfipsumOperation = (function () {
	return {
		create: function (_, store) {
			if ( !! store.get("ipsum")) {
				store.get("ipsum", {});
			}

			return (function () {
				return {
					init: function (done) {
						var scope = store.get("ipsum") || {},
						err = null;

						scope.fnames = ["Aaliyah", "Aaron", "Adele", "Alanis", "Alex", "Amy", "Angel", "Ashley", "Avril", "Adam", "Barry", "Billie", "Billy", "Bjork", "Bob", "Brandy", "Brian", "Britney", "Brooke", "Bryan", "Celine", "Christina", "Cliff", "Corey", "Craig", "Daniel", "Darren", "David", "Dean", "Dido", "Elton", "Elvis", "Emma", "Emily", "Eric", "Faith", "Fiona", "Foxy", "Franz", "Fred", "Garth", "Gwen", "Harry", "Heidi", "Ice", "Jamelia", "James", "Janet", "Jim", "Jimi", "Joe", "Justin", "Katy", "Keane", "Lionel", "Leona", "Luther", "Mandy", "Mariah", "Marvin", "Mel", "Michael", "Nelly", "Natasha", "Nick", "Nicole", "Otis", "Ozzy", "Paul", "Paula", "Peter", "Pink", "Randy", "Richard", "Ricky", "Robbie", "Rod", "Run", "Sade", "Sean", "Shaggy", "Sisqo", "Sophie", "Stevie", "Sting", "Stone", "Tim", "Tina", "Tupac", "Van", "Willie", "Xzibit"];
						scope.lnames = ["Efron", "Jean", "Nelson", "Houston", "Young", "Williams", "Halen", "Shakur", "Amos", "Yearwood", "Cruz", "Turner", "McGraw", "Lizzy", "Brookstein", "Wonder", "Ellis Bextor", "Soby", "Dogg", "Donaghy", "Spiteri", "Crow", "Twain", "Gomez", "Harding", "Mumba", "Stones", "Stewart", "Kelly", "Martin", "Ashcroft", "Gracie", "Latifah", "Floyd", "Montenegro", "Rubio", "McCartney", "Osbourne", "Redding", "Scherzinger", "Imbruglia", "Appleton", "Crue", "Musso", "Elliott", "Hucknall", "Jagger", "Gaye", "Vandross", "Stansfield", "Kravitz", "Lewis", "McFadden", "Perry", "Rock", "McPhee", "Timberlake", "Bieber", "Lennon", "Hendrix", "Morrison", "Kilcher", "Simpson", "Brown", "Blunt", "Connick", "Stefani", "Estefan", "Harrison", "Brooks", "Durst", "Ferdinand", "Mac", "Apple", "Hanley", "Clapton", "Presley"];
						scope.eclients = ["gmail", "yahoo", "aol", "hotmail", "netzero", "comcast", "prodigy"];
						scope.epre = ["the", "yo", "", "", "", "", "", "", "dat_", "my", "the_", "mighty", "32", "iam", "iwas", "super", "cool", "awesome", "i_am_", "cool", "imapepper", "joecool", "totally", "sir", "exsqueezeme"];
						scope.esuff = ["69", "1999", "2004", "96", "88", "ster", "4life", "urmom", "420", "_dood", "_dood47", "iscool", "isawesome", "sports", "balla", "balla715", "dat", "shoefetish", "ilovetofish", "ilovetodraw", "815", "99", "2003", "israd", "bootylicious", "ismyhero", "thegreat", "issoraven", "partytime", "excellent", "ismental", "_fishon", "isastar"];

						scope.listData = {};
						scope.listData.items = [];
						scope.listData.batfight = "sometimes you win, sometimes you die, you almost almost almost never lose";

						if (!scope) {
							err = "There was an error initializing the app, please try again later.";
						}

						store.set("ipsum", scope);
						done(err, pojoClone(scope).listData);
					},

					list: function (amt, done) {
						var err = null,
							scope = store.get("ipsum") || {},
							items = [],
							x = 0;

						if (!amt) {
							err = "Please enter an amount";
						}

						for (; x < amt; x++) {
							items.push({
								firstName: scope.fnames[Math.floor(Math.random() * scope.fnames.length)],
								lastName: scope.lnames[Math.floor(Math.random() * scope.lnames.length)],
								emailClient: scope.eclients[Math.floor(Math.random() * scope.eclients.length)],
								eprefix: scope.epre[Math.floor(Math.random() * scope.epre.length)],
								esuffix: scope.esuff[Math.floor(Math.random() * scope.esuff.length)]
							});
							scope.firstNameLower = items[x].firstName;
						}

						scope.listData.items = items;

						store.set("ipsum", scope);
						done(err, pojoClone(scope).listData);
					}
				};
			})();
		}
	};
})();

module.exports = ProfipsumOperation;
},{}],3:[function(require,module,exports){
var ProfipsumController = (function () {
	return {
		create: function (_, bus, ops) {

			// -- Wireup application init
			bus.on("app::init", function () {
				ops.init(function (err, item) {
					bus.emit("app::init::completed", err, item);
				});
			});

			// -- Wireup listing of all items
			bus.on("ipsum::list", function (amt, presenter) {
				ops.list(amt, function (err, item) {
					if (err) {
						presenter(err, item);
					}
					else {
						presenter(null, item);
					}
				});
			});
		}
	};
})();

module.exports = ProfipsumController;
},{}],4:[function(require,module,exports){
var ProfipsumPresenter = (function () {
	// -- Shared space between all TodoPresenters created.
	var renderBody = function renderBody(tmpl, item) {
		console.log(item);
		$("body").html(tmpl.main.render(item));
	};

	var jQueryEvents = function jQueryEvents($, _, bus, tmpl) {
		$("body").on("submit", ".ipsum-form", function (e) {
			e.preventDefault();
			var amt = $(".qty").val();
			bus.emit("ipsum::list", amt, function (err, item) {
				if (err) {
					renderBody(tmpl, {
						error: err
					});
				}
				else {
					renderBody(tmpl, item);
				}
			});
		});
	};

	var busEvents = function busEvents($, _, bus, tmpl) {
		bus.on("app::init::completed", function (err, item) {
			if (err) {
				alert(err);
			}
			else {
				renderBody(tmpl, item);
			}
		});
	};

	return {
		create: function ($, _, bus, tmpl) {
			// -- Handle all jQuery listeners
			jQueryEvents($, _, bus, tmpl);

			//  -- Handle any bus listeners, these my be triggered by other operations
			busEvents($, _, bus, tmpl);

			return {
				setup: true
			};
		}
	};
})();

module.exports = ProfipsumPresenter;
},{}],5:[function(require,module,exports){
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
},{"./app.js":6,"./configuration/profipsumModule.js":1,"nodeject":7}],7:[function(require,module,exports){
(function (module){
    "use strict";

    /*The following is the data format of a cache element
     name        : Name of the dependency
     singleton   : true/false
     fn          : Function constructor, can be a prototype or function.
     deps        : Array of dependencies where the names correspond to other named dependencies
     instance    : The instance of an element, can be pre constructed and passed in or constructed by fn.
     */

    var isArray = function isArray(o) { return Object.prototype.toString.call(o) === '[object Array]'; };
    var isString = function isString(s) { return Object.prototype.toString.call(s) == '[object String]'; };

    function factory (type){
        if (isString(type)){
            return type;
        }
        else if (isArray(type)){
            return type;
        }
        else {
            var tmp = function (args) {
                return type.apply(this, args);
            };
            // -- Newer browsers have a safer method of inheritance; sorry IE*.
            if ('create' in Object){
                tmp.prototype = Object.create(type.prototype, {
                    constructor: {
                        value: tmp,
                        enumerable : false,
                        writable: true,
                        configurable: true
                    }
                });
            }
            else { tmp.prototype = type.prototype; }
            return tmp;
        }
    };
    function addCategory(categories, category, name){
        (category in categories) ?
            (categories[category].push(name)) :
            (categories[category] = [name]);
    };

    var Nodeject = function Nodeject(options){
        this.config = options;
        this.cache = {};
        this.categories = {};
    };

    Nodeject.prototype.define = function (options){
        if (!(options.name)){ throw "Name is not found or is empty as part of the definition."; }
        if (!options.type){ throw "Type isn't found or is empty as part of the definition."; }

        if (!('name' in this.cache)){
            this.cache[options.name] = {
                singleton   : options.singleton || false,
                fn          : factory(options.type),
                deps        : options.deps || [],
                instance    : null,
                requiresNew : !(isString(options.type) || isArray(options.type))
            };

            if (options.category){
                var arr = options.category || [];
                if (isArray(arr)){
                    for (var i = 0; i < arr.length; i = i + 1){
                        addCategory(this.categories, arr[i], options.name);
                    }
                }
                else {
                    addCategory(this.categories, arr, options.name);
                }
            }
        }
        else { throw "Type or type name already defined in the container."; }

        return this;
    };

    Nodeject.prototype.resolve = function (options){
        var name = '', category = '', singleton = false;

        // -- Marshall incoming parameters to resolve the type.
        if (isString(options)){ name = options; }
        else if(options.name){ name = options.name || ''; }
        else if (options.category && isString(options.category)) { category = options.category; }
        else { throw "Cannot resolve"; }

        var deps, i;
        if (name in this.cache){
            var type = this.cache[name];
            singleton = options.singleton || type.singleton || false;

            // Resolve dependencies.
            deps = [];
            for(i = 0; i < type.deps.length; i = i + 1){
                var subtype = this.resolve(type.deps[i]);
                deps.push(subtype);
            }

            if (singleton){
                type.instance = type.instance || (type.requiresNew ? new type.fn(deps) : type.fn);
                return type.instance;
            }

            return type.requiresNew ? new type.fn(deps) : type.fn;
        }
        else if (category in this.categories){
            var types = this.categories[category] || [];
            var format = options.format || 'array';
            if (format === 'literal'){
                deps = {};
                for (i = 0; i < types.length; i = i + 1){
                    deps[types[i]] = this.resolve(types[i]);
                }
            }
            else {
                deps = [];
                for(i = 0; i < types.length; i = i + 1){
                    deps.push(this.resolve(types[i]));
                }
            }
            return deps;
        }
        else {
            throw "The type '" + name + "' is not configured in the container.";
        }
    };



    module.exports = Nodeject;

})(module)


















},{}],6:[function(require,module,exports){
var app = (function () {

	var EventEmitter2 = require("EventEmitter2").EventEmitter2;

	return {
		create: function (templates) {
			var cache = {};

			return {
				bus: (new EventEmitter2({
					"delimiter": "::",
					"wildcard": "*"
				})),
				store: {
					get: function (key) {
						return cache[key];
					},
					set: function (key, value) {
						cache[key] = value;
					}
				},
				templates: templates,
				noop: function () {}
			};
		}
	};
})();

module.exports = app;
},{"EventEmitter2":8}],9:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],8:[function(require,module,exports){
(function(process){;!function(exports, undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      
      this._conf = conf;
      
      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }
    
    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }
        
        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
    
    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;
            
            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  };

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    };

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {
    
    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      
      if (!this._all && 
        !this._events.error && 
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || this._all;
    }
    else {
      return this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {
    
    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;
        
        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if(!this._all) {
      this._all = [];
    }

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          return this;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1)
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return EventEmitter;
    });
  } else {
    exports.EventEmitter2 = EventEmitter; 
  }

}(typeof process !== 'undefined' && typeof process.title !== 'undefined' && typeof exports !== 'undefined' ? exports : window);

})(require("__browserify_process"))
},{"__browserify_process":9}]},{},[5])
;