var fnames = ["Aaliyah", "Aaron", "Adele", "Alanis", "Alex", "Amy", "Angel", "Ashley", "Avril", "Adam", "Barry", "Billie", "Billy", "Bjork", "Bob", "Brandy", "Brian", "Britney", "Brooke", "Bryan", "Celine", "Christina", "Cliff", "Corey", "Craig", "Daniel", "Darren", "David", "Dean", "Dido", "Elton", "Elvis", "Emma", "Emily", "Eric", "Faith", "Fiona", "Foxy", "Franz", "Fred", "Garth", "Gwen", "Harry", "Heidi", "Ice", "Jamelia", "James", "Janet", "Jim", "Jimi", "Joe", "Justin", "Katy", "Keane", "Lionel", "Leona", "Luther", "Mandy", "Mariah", "Marvin", "Mel", "Michael", "Nelly", "Natasha", "Nick", "Nicole", "Otis", "Ozzy", "Paul", "Paula", "Peter", "Pink", "Randy", "Richard", "Ricky", "Robbie", "Rod", "Run", "Sade", "Sean", "Shaggy", "Sisqo", "Sophie", "Stevie", "Sting", "Stone", "Tim", "Tina", "Tupac", "Van", "Willie", "Xzibit"];
var lnames = ["Efron", "Jean", "Nelson", "Houston", "Young", "Williams", "Halen", "Shakur", "Amos", "Yearwood", "Cruz", "Turner", "McGraw", "Lizzy", "Brookstein", "Wonder", "Ellis Bextor", "Soby", "Dogg", "Donaghy", "Spiteri", "Crow", "Twain", "Gomez", "Harding", "Mumba", "Stones", "Stewart", "Kelly", "Martin", "Ashcroft", "Gracie", "Latifah", "Floyd", "Montenegro", "Rubio", "McCartney", "Osbourne", "Redding", "Scherzinger", "Imbruglia", "Appleton", "Crue", "Musso", "Elliott", "Hucknall", "Jagger", "Gaye", "Vandross", "Stansfield", "Kravitz", "Lewis", "McFadden", "Perry", "Rock", "McPhee", "Timberlake", "Bieber", "Lennon", "Hendrix", "Morrison", "Kilcher", "Simpson", "Brown", "Blunt", "Connick", "Stefani", "Estefan", "Harrison", "Brooks", "Durst", "Ferdinand", "Mac", "Apple", "Hanley", "Clapton", "Presley"];
var eclients = ["gmail", "yahoo", "aol", "hotmail", "netzero", "comcast", "prodigy"];
var epre = ["the", "yo", "", "", "", "", "", "", "dat_", "my", "the_", "mighty", "32", "iam", "iwas", "super", "cool", "awesome", "i_am_", "cool", "imapepper", "joecool", "totally", "sir", "exsqueezeme"];
var esuff = ["69", "1999", "2004", "96", "88", "ster", "4life", "urmom", "420", "_dood", "_dood47", "iscool", "isawesome", "sports", "balla", "balla715", "dat", "shoefetish", "ilovetofish", "ilovetodraw", "815", "99", "2003", "israd", "bootylicious", "ismyhero", "thegreat", "issoraven", "partytime", "excellent", "ismental", "_fishon", "isastar"];

$(document).ready(function() {

	if(localStorage.name == "Discovery"){
		$('.first-header').text(localStorage.name);
	}

	// swap expand/collapse bg
  $(".accordion-body").on("show",function(event){
    $('.ec', $(this).prev()).css('background-image', 'url(' + 'img/collapse.png' + ')');
  });
  $(".accordion-body").on("hide",function(event){
    $('.ec', $(this).prev()).css('background-image', 'url(' + 'img/expand.png' + ')');
  });

  if(!localStorage.pub){
    localStorage.setItem("pub", "pub");
  }

  //set state of first accordion
  // var published = localStorage.pub;
  if(localStorage.pub == "pub"){
		$('.accordion:first').addClass("unpublished");
		$('.pubBtn').text("Publish");
  }
  else{
		$('.accordion:first').addClass("published");
		$('.pubBtn').text("Unpublish");
  }

  //save new name on click
  $('.modal-submit').click(function(){
		localStorage.setItem("name", "Discovery");
		location.reload();
  });

  //change state of first accordion
  $('.pubBtn').click(function(){
		if(localStorage.pub == "pub"){
			localStorage.setItem("pub", "unpub");
		}
		else{
			localStorage.setItem("pub", "pub");
		}
		location.reload();
  });

  


});

function getProfile() {
  var firstName = fnames[Math.floor(Math.random() * fnames.length)];
  var lastName = lnames[Math.floor(Math.random() * lnames.length)];
  var emailClient = eclients[Math.floor(Math.random() * eclients.length)];
  var eprefix = epre[Math.floor(Math.random() * epre.length)];
  var esuffix = esuff[Math.floor(Math.random() * esuff.length)];
  return $("<p />", {
    html: firstName + " " + lastName + "<br>" + eprefix + firstName.toLowerCase() + esuffix + "@" + emailClient + ".com"
  });
}

function clearList() {
  if ($(".results").text().length > 0) {
    $(".results").empty();
  }
}

$("body").on("click", "button", function() {
  clearList();
  $(".success").show();
  var limit = $(".qty").val(), x = 0;
  while(x < limit) {
    $(".results").append(getProfile());
    x += 1;
  }
  $(".results").show();
  
});


