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