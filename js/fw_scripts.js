$(document).ready(function(){
	/*MainMenu SetUp
	================*/
	$('.mainmenu').find('li:has(ul)').addClass('has-menu');
	$('.menu_indicator').stop().animate({'opacity' : '0'},1);
	$('.sub_menu').animate({'opacity' : '0'},1);
	$('.mobile_menu').html($('.mainmenu').html());
	$('.mobile_menu').find('li.sep').remove();

	/*MainMenu Hover FX
	===================*/
	$('.mainmenu > li').hover(function(){
		nav_offset = $('.head_nav').offset();
		offset = $(this).offset();
		cur_lt = offset.left - nav_offset.left;
		cur_top = offset.top - nav_offset.top;
		$('.menu_indicator').stop().animate({'opacity' : '1', 'left' : cur_lt+'px', 'top' : cur_top + 'px'},400);
		$(this).children('a').stop().animate({'color' : '#195588'},300);
	}, function(){
		$(this).children('a').stop().animate({'color' : '#555555'},300);
	});
	$('.mainmenu').mouseleave(function(){
		$('.menu_indicator').stop().animate({'opacity' : '0'},300);
	});

	/*SubMenu Script
	================*/
	$('.mainmenu').find('li.has-menu').hover(function(){
		showed_menu = $(this).children('.sub_menu');
		showed_menu.css('display', 'block');
		showed_menu.stop().animate({'opacity' : '1'}, 300);
	}, function(){
		showed_menu = $(this).children('.sub_menu');
		showed_menu.stop().animate({'opacity' : '0'}, 300, function() {$(this).css('display', 'none');});
	});

	/*MobileMenu Scripts
	====================*/
	$('.menu_toggle').click(function(){
		$(this).toggleClass('act');
		$('.mobile_menu').slideToggle();
	});

/*Testimonials select skip
=======================*/
$('#testimonial-filter').change(function(){
	var selected = $('#testimonial-filter option:selected').val();
	if (window.console) console.log(selected);
	if (selected !== '') {
		if (window.console) console.log('#'+selected);
		$('#'+selected).focus();
		$(window).scrollTop($('#'+selected).offset().top);
	}
});



	$('#contact-us form').submit(function() {

		// update user interface
		$('#contact-us .response').html('Processing...');
		$('#contact-us form input[type="submit"]').val('Sending...');

		// Prepare query string and send AJAX request
		$.ajax({
			url: 'site-handlers/contact-us.php',
			data: 'ajax=true&name=' + escape($('#name').val()) +
				  '&email=' + escape($('#email').val()) +
				  '&org=' + escape($('#org').val()) +
				  '&phone=' + escape($('#phone').val()) +
				  '&message=' + escape($('#message').val())
				  ,
			success: function(msg) {
				$('#contact-us .response').html(msg);
				if(msg.substr(0,5) === 'Error') {
					$('#contact-us input[type="submit"]').val('Try again!');
				} else {
  					$('#contact-us input').val('');
					$('#contact-us input[type="submit"]').val('All done!');
				}
			}
		});

		return false;
	});

});
