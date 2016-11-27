var hudsonCounty = [
	{
		clickCount: 0,
		name: 'Bayonne',
		municipalType: 'City',
		imgSrc: 'img/catB.jpg',
		speakerNames: ['City Hall','Near 14A Turnpike Ext']
	},
	{
		clickCount: 0,
		name: 'East Newark',
		municipalType: 'Borough',		
		imgSrc: 'img/catA.jpg',
		speakerNames: ['None discovered yet']
	},
	{
		clickCount: 0,
		name: 'Guttenberg',
		municipalType: 'Town',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['None discovered yet']
	},
	{
		clickCount: 0,
		name: 'Harrison',
		municipalType: 'Town',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Near Blue Drawbridge']
	},
	{
		clickCount: 0,
		name: 'Hoboken',
		municipalType: 'City',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Observer Highway']
	},
	{
		clickCount: 0,
		name: 'Jersey City',
		municipalType: 'City',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Exchange Place','Five Corners','Grove Street','Jersey City Heights',
		            'Liberty State Park','Lincoln Park','Newport']
	},
	{
		clickCount: 0,
		name: 'Kearny',
		municipalType: 'Town',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Health Department','Jail','Library']
	},
	{
		clickCount: 0,
		name: 'North Bergen',
		municipalType: 'Township',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['None discovered yet']
	},
	{
		clickCount: 0,
		name: 'Secaucus',
		municipalType: 'Town',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Outlets']
	},
	{
		clickCount: 0,
		name: 'Union City',
		municipalType: 'City',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['None discovered yet']
	},
	{
		clickCount: 0,
		name: 'Weehawken',
		municipalType: 'Township',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['Ferry']
	},
	{
		clickCount: 0,
		name: 'West New York',
		municipalType: 'Town',		
		imgSrc: 'img/catC.jpg',
		speakerNames: ['None discovered yet']
	}
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