<<<<<<< HEAD
define([
	"../ajax"
], function( jQuery ) {

jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};

return jQuery._evalUrl;

});
=======
define([
	"../ajax"
], function( jQuery ) {

jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};

return jQuery._evalUrl;

});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
