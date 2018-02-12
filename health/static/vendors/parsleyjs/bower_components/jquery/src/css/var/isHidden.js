<<<<<<< HEAD
define([
	"../../core",
	"../../selector"
	// css is assumed
], function( jQuery ) {

	return function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};
});
=======
define([
	"../../core",
	"../../selector"
	// css is assumed
], function( jQuery ) {

	return function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
