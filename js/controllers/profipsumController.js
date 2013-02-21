var IpsumController = (function() {
	return {
		create: function(_, bus, ops) {

			// -- Wireup listing of all items
			bus.on("ipsum::list", function (presenter){
				ops.list(function(err, ipsumItems){
					if(err){
						presenter(err, ipsumItems);
					}
					else {
						presenter(null, ipsumItems);
					}
				});
			});
		}
	};
})();