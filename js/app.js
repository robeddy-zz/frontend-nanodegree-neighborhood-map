//TO DO LIST
// ENCAPSULATE THE HIDING AND SHOWING OF LIST AREA AND READING AREA

var hudsonCounty = [
	{
		name: 'Bayonne',
		municipal:'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '1137 Broadway in Bayonne',
		coords: {
			lat: 40.685484,
			lng: -74.100056
		}
	},
	{
		name: 'Bayonne-City Hall',
		municipal:'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '617 Avenue C in Bayonne',
		coords: {
			lat: 40.668556,
			lng: -74.117720
		}
	},
	{
		name: 'Berry Lane Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '1066 Garfield Ave in Jersey City',
		coords: {
			lat: 40.714493,
			lng: -74.067334
		}
	},
	{
		name: 'Exchange Place',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: 'Christopher Columbus Dr in Jersey City',
		coords: {
			lat: 40.717200,
			lng: -74.034483
		}
	},
	{
		name: 'Grove Street',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '95 Marin Blvd in Jersey City',
		coords: {
			lat: 40.718859,
			lng: -74.041371
		}
	},
	{
		name: 'Harrison',
		municipal:'Harrison',
		municipalType: 'Town',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '353 Frank E Rodgers Blvd South in Harrison',
		coords: {
			lat: 40.743598,
			lng: -74.155948
		}
	},
	{
		name: 'Hoboken',
		municipal:'Hoboken',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '63 Observer Hwy in Hoboken',
		coords: {
			lat: 40.735497,
			lng: -74.031049
		}
	},
	{
		name: 'Jersey City Heights',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '309 Paterson Plank Rd in Jersey City',
		coords: {
			lat: 40.749134,
			lng: -74.039336
		}
	},
	{
		name: 'Kearny Health Department',
		municipal:'Kearny',
		municipalType: 'Town',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '639 Kearny Ave in Kearny',
		coords: {
			lat: 40.773315,
			lng: -74.143786
		}
	},
	{
		name: 'Liberty State Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '86 Audrey Zapp Dr in Jersey City',
		coords: {
			lat: 40.709475,
			lng: -74.042902
		}
	},
	{
		name: 'Lincoln Park',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
		strAddr: '53 US-9 Truck in Jersey City',
		coords: {
			lat: 40.729630,
			lng: -74.085907
		}
	},
	{
		name: 'Newport',
		municipal:'Jersey City',
		municipalType: 'City',
		imgSrc: 'img/spkr[name].jpg',
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
var speakerMunis = [];


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




var ViewModel = function() {
	var self = this;

	this.locationList = ko.observableArray([]);

	speakerInfoWindow = new google.maps.InfoWindow();


	//make the speakers array an observable array
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

		// console.log(speakerMunis);
		oneMuni = speaker.municipal;

		function pushMuni(muni) {
        	found = false;
        	push = 'no';
        	// console.log('muni==',muni);
        	if (speakerMunis.length === 0) {
        		found = false;
        	} else {
        		for (var i = 0; i < speakerMunis.length; i++) {
        			if (muni == speakerMunis[i] ) {
        				found = true;
        			};
        		};

        	};


        	return found;
		}
		// console.log('1m',pushMuni(oneMuni));
		if (pushMuni(oneMuni) == false) {
			speakerMunis.push(oneMuni);
		};


		//speakerMunis.push(oneMuni);

		//document.getElementById("reading_area").style.visibility = "hidden";

		marker.addListener('click',function() {
			self.toggleBounce(marker);

			/* nytimes */
			htmlString = (function (speakerParam){
				console.log(speakerParam.name);
            	var speakerStr = speakerParam.name + ' Hudson County New Jersey';

                var nytimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + speakerStr + '&sort=newest&api-key=75c2f356ffcc4873a66c4bfccc40b327';
                console.log(nytimesURL);
            	$.getJSON(nytimesURL,function(data){
                		var contentString = '';
            	        articles = data.response.docs;
            	        articles_max = articles.length > 1 ? 1 : articles.length;

            	        if (articles_max > 0) {
            	        	for (var i = 0; i < articles_max; i++) {
                        		var article = articles[i];
								console.log('hit if');
								contentString = '<a href="' + article.web_url + '"  target="_blank">' + article.headline.main +'</a><br>';
								console.log(contentString);
								speakerInfoWindow.open(map, marker);
								speakerInfoWindow.setContent('<p><b>The ' + marker.name + ' Speaker</b><br>' + marker.street + '</p>' + '<em>News Near this Speaker:</em><br>' + contentString);
                    		};
            	        };

                	}).fail(function(e){
                		speakerInfoWindow.open(map, marker);
            	        speakerInfoWindow.setContent('No articles nearby.  Check back soon!');
            	})
            }(marker));
			/* nytimes */

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
			return self.allSpeakers();
		}
		else {
			return ko.utils.arrayFilter(self.allSpeakers(), function(speaker) {
				var speakerName = speaker.municipal.toLowerCase();
				var match = filter === speakerName;
				speaker.marker.setVisible(match);
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




}


function mapError() {
    alert('Now this is embarrassing.  For Google.  Their maps aren\'t loading.  It\'s likely them and not you, but check your internet connection anyway then refresh.');
}