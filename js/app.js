var hudsonCounty = [
	{
		clickCount: 0,
		name: 'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.685484,
			lng: -74.100056
		}
	},
	{
		clickCount: 0,
		name: 'Bayonne-City Hall',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.668556,
			lng: -74.117720
		}
	},
	{
		clickCount: 0,
		name: 'Berry Lane Park',
		municipalType: 'City',
		imgSrc: 'img/catC.jpg',
		coords: {
			lat: 40.714493,
			lng: -74.067334
		}
	},
	{
		clickCount: 0,
		name: 'Exchange Place',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.717200,
			lng: -74.034483
		}
	},
	{
		clickCount: 0,
		name: 'Grove Street',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.718859,
			lng: -74.041371
		}
	},
	{
		clickCount: 0,
		name: 'Harrison',
		municipalType: 'Town',
		imgSrc: 'img/catC.jpg',
		coords: {
			lat: 40.743598,
			lng: -74.155948
		}
	},
	{
		clickCount: 0,
		name: 'Hoboken',
		municipalType: 'City',
		imgSrc: 'img/catC.jpg',
		coords: {
			lat: 40.735497,
			lng: -74.031049
		}
	},
	{
		clickCount: 0,
		name: 'Jersey City Heights',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.749134,
			lng: -74.039336
		}
	},
	{
		clickCount: 0,
		name: 'Kearny Health Department',
		municipalType: 'Town',
		imgSrc: 'img/catC.jpg',
		coords: {
			lat: 40.773315,
			lng: -74.143786
		}
	},
	{
		clickCount: 0,
		name: 'Liberty State Park',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.709475,
			lng: -74.042902
		}
	},
	{
		clickCount: 0,
		name: 'Lincoln Park',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.729630,
			lng: -74.085907
		}
	},
	{
		clickCount: 0,
		name: 'Newport',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		coords: {
			lat: 40.726500,
			lng: -74.035106
		}
	}
	// ,
	// {
	// 	clickCount: 0,
	// 	name: 'South Kearny',
	// 	municipalType: 'Town',
	// 	imgSrc: 'img/catC.jpg'
	// },
	// {
	// 	clickCount: 0,
	// 	name: 'Kearny Library',
	// 	municipalType: 'Town',
	// 	imgSrc: 'img/catC.jpg'
	// },
	// {
	// 	clickCount: 0,
	// 	name: 'Secaucus Outlets',
	// 	municipalType: 'Town',
	// 	imgSrc: 'img/catC.jpg'
	// },
	// {
	// 	clickCount: 0,
	// 	name: 'Weehawken',
	// 	municipalType: 'Township',
	// 	imgSrc: 'img/catC.jpg'
	// }
]



var Location = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.speakerNames = ko.observableArray(data.speakerNames);
}


var ViewModel = function() {
	var self = this;

	this.locationList = ko.observableArray([]);

	hudsonCounty.forEach(function(loc){
		self.locationList.push( new Location(loc) );
	});

	// this.currentCat = ko.observable( this.catList()[0] );

	// this.incrementCounter = function() {
	// 	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	// };

	// this.setCat = function(clickedCat) {
	// 	self.currentCat(clickedCat)
	// };
}

ko.applyBindings(new ViewModel())