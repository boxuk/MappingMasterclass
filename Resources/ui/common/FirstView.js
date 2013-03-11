//FirstView Component Constructor
function FirstView() {
	
	var self = Ti.UI.createView();
	var GeoCoder = require('ui/common/Geocoder');
	var geoCoder = new GeoCoder();
	
	var map = Ti.Map.createView();
	
	var addressField = Ti.UI.createTextField({
		left: 10,
		right: 10,
		top: 20,
		hintText: 'Type an address here!',
		backgroundColor: 'white',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	function findAddress(e)
	{
		geoCoder.forwardGeocoder(e.value, showAddress);
	}
	
	function showAddress(e)
	{
		if (e.success) {
			var place = e.places[0];
			
			map.setLocation({
				latitude: place.region.lat,
				latitudeDelta: 0.05,
				longitude: place.region.lng,
				longitudeDelta: 0.05			
			});
			
			map.addAnnotation(Ti.Map.createAnnotation({
				animate: true,
		    	pincolor: Titanium.Map.ANNOTATION_RED,
		    	latitude: place.region.lat,
		    	longitude: place.region.lng,
		    	title: addressField.getValue()
		    })); 
		}
	}
	
	addressField.addEventListener('return', findAddress);
	
	map.add(addressField);
	self.add(map);
	
	return self;
}

module.exports = FirstView;
