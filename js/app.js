//TO DO LIST
		// ENCAPSULATE THE HIDING AND SHOWING OF LIST AREA AND READING AREA

var hudsonCounty = [
	{
		clickCount: 0,
		name: 'Bayonne',
		municipal:'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '1137 Broadway in Bayonne',
		coords: {
			lat: 40.685484,
			lng: -74.100056
		}
	},
	{
		clickCount: 0,
		name: 'Bayonne-City Hall',
		municipal:'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '617 Avenue C in Bayonne',
		coords: {
			lat: 40.668556,
			lng: -74.117720
		}
	},
	{
		clickCount: 0,
		name: 'Berry Lane Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catC.jpg',
		strAddr: '1066 Garfield Ave in Jersey City',
		coords: {
			lat: 40.714493,
			lng: -74.067334
		}
	},
	{
		clickCount: 0,
		name: 'Exchange Place',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: 'Christopher Columbus Dr in Jersey City',
		coords: {
			lat: 40.717200,
			lng: -74.034483
		}
	},
	{
		clickCount: 0,
		name: 'Grove Street',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '95 Marin Blvd in Jersey City',
		coords: {
			lat: 40.718859,
			lng: -74.041371
		}
	},
	{
		clickCount: 0,
		name: 'Harrison',
		municipal:'Harrison',
		municipalType: 'Town',
		imgSrc: 'img/catC.jpg',
		strAddr: '353 Frank E Rodgers Blvd South in Harrison',
		coords: {
			lat: 40.743598,
			lng: -74.155948
		}
	},
	{
		clickCount: 0,
		name: 'Hoboken',
		municipal:'Hoboken',
		municipalType: 'City',
		imgSrc: 'img/catC.jpg',
		strAddr: '63 Observer Hwy in Hoboken',
		coords: {
			lat: 40.735497,
			lng: -74.031049
		}
	},
	{
		clickCount: 0,
		name: 'Jersey City Heights',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '309 Paterson Plank Rd in Jersey City',
		coords: {
			lat: 40.749134,
			lng: -74.039336
		}
	},
	{
		clickCount: 0,
		name: 'Kearny Health Department',
		municipal:'Kearny',
		municipalType: 'Town',
		imgSrc: 'img/catC.jpg',
		strAddr: '639 Kearny Ave in Kearny',
		coords: {
			lat: 40.773315,
			lng: -74.143786
		}
	},
	{
		clickCount: 0,
		name: 'Liberty State Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '86 Audrey Zapp Dr in Jersey City',
		coords: {
			lat: 40.709475,
			lng: -74.042902
		}
	},
	{
		clickCount: 0,
		name: 'Lincoln Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '53 US-9 Truck in Jersey City',
		coords: {
			lat: 40.729630,
			lng: -74.085907
		}
	},
	{
		clickCount: 0,
		name: 'Newport',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		strAddr: '525 Washington Blvd in Jersey City',
		coords: {
			lat: 40.726500,
			lng: -74.035106
		}
	}
]


var map;

var markers = [];
var speakerNames = [];


var Location = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	//this.speakerNames = ko.observableArray(data.speakerNames);
}

     // TODO: Create a map variable



     // TODO: Complete the following function to initialize the map
function initMap() {

      //this one initMap function has 4 main parts
      //1) map object itself w/all its customizarions
      //2) extend map object with a listener to keep map centered on window resize


      map = new google.maps.Map(document.getElementById('map'), {

                center: {lat:40.733592, lng: -74.080931},
                zoom: 12,
                disableDefaultUI: true
      ,
      styles: [{
		        "featureType": "all",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "weight": "2.00"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#9c9c9c"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#7b7b7b"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffe600"
		            },
		            {
		                "weight": "0.50"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "weight": "0.20"
		            },
		            {
		                "lightness": "-41"
		            },
		            {
		                "saturation": "-70"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffe600"
		            },
		            {
		                "weight": ".5"
		            },
		            {
		                "lightness": "-12"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffe600"
		            },
		            {
		                "weight": "0.50"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#46bcec"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#c8d7d4"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#070707"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    }]

      });   //this is the end of new maps instance

	  //next extend it so it's responsive
      google.maps.event.addDomListener(window, "resize", function() {
      		var center = map.getCenter();
      		google.maps.event.trigger(map, "resize");
      		map.setCenter(center);
      });

      ko.applyBindings(new ViewModel());

}


/* NY TIMES AREA */
function nytimes(speakerParam){
	var speakerStr = speakerParam;
    $('#nytimes-articles').html('');
	//console.log($('#nytimes-articles'));
    var $nytElem = $('#nytimes-articles');
    var $nytHeaderElem = $('#nytimes-header');
    var nytimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + speakerStr + '&sort=newest&api-key=75c2f356ffcc4873a66c4bfccc40b327';
    //console.log(speakerStr);
	$.getJSON(nytimesURL,function(data){
    		//console.log('inNYtimes');

	        articles = data.response.docs;
	        articles_max_five = articles.length > 5 ? 5 : articles.length;

	        if (articles_max_five > 0) {
	        		for (var i = 0; i < articles_max_five; i++) {
            		var article = articles[i];
            		$nytElem.append('<li><a href="' + article.web_url + '"  target="_blank">' + article.headline.main +'</a></li>');
        		};
	        } else {
	        	$nytElem.append('<li>No news coverage... yet.</li>');
	        };

    	}).fail(function(e){
	        $nytElem.text('You shouldn\'t see this.  Somthins up.  Please check your internet connection and refresh.');
	    })
}


var ViewModel = function() {
	var self = this;

	this.locationList = ko.observableArray([]);

	hudsonCounty.forEach(function(loc){
		self.locationList.push( new Location(loc) );
	});

	speakerInfoWindow = new google.maps.InfoWindow();


	//make the restaurant array an observable array
	self.allSpeakers = ko.observable(hudsonCounty);

	//loop through hudsonCounty and load speakers and create markers for speakers
	self.allSpeakers().forEach(function(speaker) {

		var marker = new google.maps.Marker({
			map: map,

			position: speaker.coords,
			name: speaker.name,
			municipal: speaker.municipal,
			street: speaker.strAddr,
			type: speaker.municipalType,

			animation: google.maps.Animation.DROP
		});

		speaker.marker = marker;
		markers.push(marker);

		oneSpeaker = speaker.name;
		speakerNames.push(oneSpeaker);

		document.getElementById("reading_area").style.visibility = "hidden";

		marker.addListener('click',function() {
			self.toggleBounce(marker);
			speakerInfoWindow.open(map, marker);
			speakerInfoWindow.setContent('The ' + marker.name + ' Speaker<br>' + marker.street);
		});

	});

	//console.log('spNames',speakerNames);

	self.populateInfoWindow = function(speaker) {
		var marker = speaker.marker;

		google.maps.event.trigger(marker, 'click');
		//console.log('clicked in populateInfoWindow');
		//console.log(marker);

	};


	self.selectedSpeaker = ko.observable("");

	self.filteredByType = ko.computed(function() {
		//console.log('in filteredByType');
		speakerInfoWindow.close();

		var filter = !self.selectedSpeaker() ? "" : self.selectedSpeaker().toLowerCase();

		if (filter.length === 0) {
			markers.forEach(function(marker){
				marker.setVisible(true);
			});

			document.getElementById("reading_area").style.visibility = "hidden";
			document.getElementById("reading_area").style.height = "0px";
			document.getElementById("list_area").style.visibility = "visible";
			document.getElementById("list_area").style.height = "auto";
			return self.allSpeakers();
		}
		else {
			return ko.utils.arrayFilter(self.allSpeakers(), function(speaker) {
				var speakerName = speaker.name.toLowerCase();
				var match = filter === speakerName;
				speaker.marker.setVisible(match);
				document.getElementById("reading_area").style.visibility = "visible";
				document.getElementById("reading_area").style.height = "auto";
				document.getElementById("list_area").style.visibility = "hidden";
				document.getElementById("list_area").style.height = "0px";
				console.log('match',match);
				console.log('filter',filter);
				//nytimes(match);
				if (match) {
					nytimes('"'+ filter + '" "Hudson County"');
				};
				return match;
			});
		}

	});

	self.toggleBounce = function(marker) {
		if(marker.getAnimation() !== null){
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function() {
				marker.setAnimation(null);
			}, 700);
		}
	};


	// this.currentCat = ko.observable( this.catList()[0] );

	// this.incrementCounter = function() {
	// 	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	// };

	// this.setCat = function(clickedCat) {
	// 	self.currentCat(clickedCat)
	// };
}


function mapError() {
    alert('Now this is embarrassing.  For Google.  Their maps aren\'t loading.  It\'s likely them and not you, but check your internet connection anyway then refresh.');
}