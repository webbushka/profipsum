var IpsumOperation = (function() {
	return {
		create: function(_, store) {
			if(!!store.get("ipsum")){
				store.get("ipsum", []);
			}
		}
	};
})();