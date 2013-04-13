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