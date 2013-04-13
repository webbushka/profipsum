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