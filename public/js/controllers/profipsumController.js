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