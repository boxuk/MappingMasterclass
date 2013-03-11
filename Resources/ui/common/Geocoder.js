function Geocoder()
{
	var basicGeo = require('bencoding.basicgeo');
	basicGeo.purpose = "Map display"; 
	var available = basicGeo.createAvailability();
	var geoCoder = basicGeo.createGeocoder();
	
	return geoCoder;
}

module.exports = Geocoder;