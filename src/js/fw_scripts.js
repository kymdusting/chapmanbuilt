$( document ).ready( function () {
	/*MainMenu SetUp
	================*/
	$( '.mainmenu' ).find( 'li:has(ul)' ).addClass( 'has-menu' );
	$( '.menu_indicator' ).stop().animate( {
		'opacity': '0'
	}, 1 );
	$( '.sub_menu' ).animate( {
		'opacity': '0'
	}, 1 );
	$( '.mobile_menu' ).html( $( '.mainmenu' ).html() );
	$( '.mobile_menu' ).find( 'li.sep' ).remove();

	/*MainMenu Hover FX
	===================*/
	$( '.mainmenu > li' ).hover( function () {
		nav_offset = $( '.head_nav' ).offset();
		offset = $( this ).offset();
		cur_lt = offset.left - nav_offset.left;
		cur_top = offset.top - nav_offset.top;
		$( '.menu_indicator' ).stop().animate( {
			'opacity': '1',
			'left': cur_lt + 'px',
			'top': cur_top + 'px'
		}, 400 );
		$( this ).children( 'a' ).stop().animate( {
			'color': '#195588'
		}, 300 );
	}, function () {
		$( this ).children( 'a' ).stop().animate( {
			'color': '#555555'
		}, 300 );
	} );
	$( '.mainmenu' ).mouseleave( function () {
		$( '.menu_indicator' ).stop().animate( {
			'opacity': '0'
		}, 300 );
	} );

	/*SubMenu Script
	================*/
	$( '.mainmenu' ).find( 'li.has-menu' ).hover( function () {
		showed_menu = $( this ).children( '.sub_menu' );
		showed_menu.css( 'display', 'block' );
		showed_menu.stop().animate( {
			'opacity': '1'
		}, 300 );
	}, function () {
		showed_menu = $( this ).children( '.sub_menu' );
		showed_menu.stop().animate( {
			'opacity': '0'
		}, 300, function () {
			$( this ).css( 'display', 'none' );
		} );
	} );

	/*MobileMenu Scripts
	====================*/
	$( '.menu_toggle' ).click( function () {
		$( this ).toggleClass( 'act' );
		$( '.mobile_menu' ).slideToggle();
	} );

	/*Testimonials select skip
	=======================*/
	$( '#testimonial-filter' ).change( function () {
		var selected = $( '#testimonial-filter option:selected' ).val();
		if ( window.console ) console.log( selected );
		if ( selected !== '' ) {
			if ( window.console ) console.log( '#' + selected );
			$( '#' + selected ).focus();
			$( window ).scrollTop( $( '#' + selected ).offset().top );
		}
	} );



	$( '#contact-us form' ).submit( function () {

		// update user interface
		$( '#contact-us .response' ).html( 'Processing...' );
		$( '#contact-us form input[type="submit"]' ).val( 'Sending...' );

		// Prepare query string and send AJAX request
		$.ajax( {
			url: 'site-handlers/contact-us.php',
			data: 'ajax=true&name=' + escape( $( '#name' ).val() ) +
				'&email=' + escape( $( '#email' ).val() ) +
				'&org=' + escape( $( '#org' ).val() ) +
				'&phone=' + escape( $( '#phone' ).val() ) +
				'&message=' + escape( $( '#message' ).val() ),
			success: function ( msg ) {
				$( '#contact-us .response' ).html( msg );
				if ( msg.substr( 0, 5 ) === 'Error' ) {
					$( '#contact-us input[type="submit"]' ).val( 'Try again!' );
				} else {
					$( '#contact-us input' ).val( '' );
					$( '#contact-us input[type="submit"]' ).val( 'All done!' );
				}
			}
		} );

		return false;
	} );

	// Image gallery stuff
	function gallery() {
		var Gallery = {

			init: function ( config ) {
				this.trigger = config.trigger;
				this.hook = config.hook;
				this.gallery = config.gallery;
				this.galleryInner = config.galleryInner;
				this.next = config.next;
				this.prev = config.prev;
				this.close = config.close;
				this.dirClass = config.dirClass;
				this.gotoClose = config.gotoClose;
				this.current = 0;
				this.gEvents();
			},

			getGallery: function ( snip ) {

				var _this = this;
				// Prepare query string and send AJAX request
				$.ajax( {
					context: this,
					url: 'gallery-snippet.html',
					success: function ( data, msg ) {
						if ( msg.substr( 0, 5 ) === 'Error' ) {
							// if ( window.console ) console.log( 'uh-oh!' );
						} else {
							this.hook.append( data );
							$( this.gallery ).addClass( 'gone' ).fadeIn( '200', function () {
								$( this.gallery ).removeClass( 'gone' );
								$( _this.hook ).addClass( 'gallery' );
								$( 'html, body' ).animate( {
									scrollTop: $( 'body' ).offset().top
								}, 0 );
							} );
							$( this.galleryInner ).append( snip );
							this.getContent();
						}
					}
				} );

			},

			getContent: function ( img, snip ) {

				var _this = this;
				// make sure the page is ready to only show the gallery
				// get the current thumbnail and display it's equivalent gallery image
				var thumbs = $( this.gallery ).find( '.gallery-thumbs li' ),
					display = $( thumbs[ this.current - 1 ] ).find( 'a' ).attr( 'href' );
				$( '<img/>' ).attr( 'src', display ).load( function () {
					$( this ).remove(); // prevent memory leaks
					$( _this.gallery ).css( 'background-image', 'url(' + display + ')' );
					$( '.cover' ).fadeOut( 300, function () {} );
				} );
				// check for which controls should be active
				this.checkControls();

			},

			checkControls: function () {

				var thumbs = $( this.gallery ).find( '.gallery-thumbs li' ),
					l = thumbs.length;

				// set the current state for the current thumbnail
				// $( thumbs ).find( 'img' ).css( 'border-color', 'rgb(234,234,234)' );
				// $( thumbs[ this.current - 1 ] ).find( 'img' ).css( 'border-color', 'rgb(215,29,40)' );
				$( thumbs ).find( 'img' ).animate( {
					'border-color': 'rgb(234,234,234)'
				}, 250 );
				$( thumbs[ this.current - 1 ] ).find( 'img' ).animate( {
					'border-color': 'rgb(215,29,40)'
				}, 250 );

				// Check if the Prev control is needed
				if ( this.current === 1 ) {
					$( this.prev ).addClass( 'gone' );
				} else {
					$( this.prev ).removeClass( 'gone' );
				}

				// Check if the Next control is needed
				if ( this.current === l ) {
					$( this.next ).addClass( 'gone' );
				} else {
					$( this.next ).removeClass( 'gone' );
				}

			},

			gEvents: function () {

				var _this = this;

				// Open the gallery

				$( 'body' ).on( 'click', _this.trigger, function ( event ) {
					event.preventDefault();

					if ( window.console ) console.log( 'Make that mofo image gallery show up' );
					$( '.cover' ).show();
					_this.current = 1;
					_this.gotoClose = '#' + $( this ).parent( 'li' ).data( 'id' );

					var img = $( this ).find( 'img' ).attr( 'src' ),
						snip = $( this ).next( '.work-snippet' ).html();

					// go get the gallery snippet if it doesn't already exist
					if ( !$( _this.gallery ).length ) {

						_this.getGallery( snip );
					} else {
						$( _this.galleryInner ).find( '.gallery-thumbs, .work-content' ).remove();
						$( _this.galleryInner ).append( snip );
						$( _this.gallery ).fadeIn( '200', function () {

							$( _this.gallery ).removeClass( 'gone' );
							$( _this.hook ).addClass( 'gallery' );
							_this.getContent();
							_this.checkControls();
							$( 'html, body' ).animate( {
								scrollTop: $( 'body' ).offset().top
							}, 0 );
						} );
					}


				} );

				// Close the gallery

				$( 'body' ).on( 'click', _this.close, function ( event ) {
					event.preventDefault();
					$( _this.gallery ).fadeOut( '200', function () {
						$( _this.gallery ).addClass( 'gone' ).removeAttr( 'style' );
					} );
					$( _this.hook ).removeClass( ' gallery' );
					// Move the work-snippet section back to top on closing the gallery
					$( 'html, body' ).animate( {
						scrollTop: $( _this.gotoClose ).offset().top
					}, 0 );

				} );

				// Previous image

				$( 'body' ).on( 'click', _this.prev, function ( event ) {
					event.preventDefault();
					_this.current -= 1;
					_this.dirClass = 'slide-first';
					$( '.cover' ).show().removeAttr( 'style' );

					var thumbs = $( _this.gallery ).find( '.gallery-thumbs li' ),
						display = $( thumbs[ _this.current - 1 ] ).find( 'a' ).attr( 'href' );
					$( '<img/>' ).attr( 'src', display ).load( function () {
						$( this ).remove(); // prevent memory leaks
						$( _this.gallery ).css( 'background-image', 'url(' + display + ')' );
						$( '.cover' ).fadeOut( 300 );
					} );
					_this.checkControls();

				} );

				// Next image

				$( 'body' ).on( 'click', _this.next, function ( event ) {
					event.preventDefault();
					_this.current += 1;
					_this.dirClass = 'slide-second';
					$( '.cover' ).show().removeAttr( 'style' );

					var thumbs = $( _this.gallery ).find( '.gallery-thumbs li' ),
						display = $( thumbs[ _this.current - 1 ] ).find( 'a' ).attr( 'href' );

					$( '<img/>' ).attr( 'src', display ).load( function () {
						$( this ).remove(); // prevent memory leaks
						$( _this.gallery ).css( 'background-image', 'url(' + display + ')' );
						$( '.cover' ).fadeOut( 300 );
					} );
					_this.checkControls();

				} );

				// Thumbnail image

				$( 'body' ).on( 'click', '.gallery-thumbs a', function ( event ) {
					event.preventDefault();
					if ( window.console ) console.log( this );
					_this.current = $( this ).data( 'link-id' );
					if ( window.console ) console.log( _this.current );
					_this.dirClass = 'slide-second';
					$( '.cover' ).show().removeAttr( 'style' );

					var thumbs = $( _this.gallery ).find( '.gallery-thumbs li' ),
						display = $( thumbs[ _this.current - 1 ] ).find( 'a' ).attr( 'href' );

					$( '<img/>' ).attr( 'src', display ).load( function () {
						$( this ).remove(); // prevent memory leaks
						$( _this.gallery ).css( 'background-image', 'url(' + display + ')' );
						$( '.cover' ).fadeOut( 300 );
					} );
					_this.checkControls();

				} );

				$( document ).keyup( function ( e ) {

					if ( e.keyCode == 27 ) {
						$( _this.gallery ).fadeOut( '200', function () {
							$( _this.gallery ).addClass( 'gone' ).removeAttr( 'style' );
						} );
						$( _this.hook ).removeClass( ' gallery' );
						// Move the Artists section back to top on closing the gallery
						$( 'html, body' ).animate( {
							scrollTop: $( _this.gotoClose ).offset().top
						}, 0 );
					} // escape key maps to keycode `27`
				} );

			}

		};

		Gallery.init( {
			trigger: '.work-block a',
			gallery: '.mod-gallery',
			hook: $( 'body' ),
			galleryInner: '.mod-gallery-hook',
			next: '.mod-gallery-next',
			prev: '.mod-gallery-prev',
			close: '.mod-gallery-close',
			dirClass: 'slide-second',
			gotoClose: '',
		} );

	}

	gallery();


	// Our work filter
	$( '.filter_navigation a' ).on( 'click', function () {
		var v = $( this ).data( 'value' ),
			els = $( '.work-block' );

		els.each( function ( i ) {
			if ( v === 'all' ) {
				$( this ).slideDown( 'fast' );
			} else {
				if ( !$( this ).hasClass( v ) ) {
					$( this ).slideUp( 'fast' );
				} else {
					$( this ).slideDown( 'fast' );
				}
			}

		} );

		if ( window.console ) console.log( v );
	} );

} );