var IpsumPresenter = (function() {
	// -- Shared space between all TodoPresenters created.
	var renderBody = function renderBody(tmpl, items) {
			var data = {
				items: items,
				batfight: "sometimes you win, sometimes you die, you almost almost almost never lose"
			};
			$("body").html(tmpl.main.render(data));
		};

	var jQueryEvents = function jQueryEvents($, _, bus, tmpl) {

		};

	var busEvents = function busEvents($, _, bus, tmpl) {
			bus.on("app::init", function() {
				bus.emit("ipsum:list", function(err, items) {
					renderBody(tmpl, items);
				});
			});
		};

	return {
		create: function($, _, bus, tmpl) {
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