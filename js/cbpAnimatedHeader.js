/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 500;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			// Update the actual file path the this image
			document.getElementById("baby-doctor-logo").src = "file:///Users/Dmitry/alkami/baby-doctor-home-page/img/logos/mobile_logo_blue.png"
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			// Update the actual file path the this image
			document.getElementById("baby-doctor-logo").src = "file:///Users/Dmitry/alkami/baby-doctor-home-page/img/logos/mobile_logo_white.png"
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
