$(document).ready(function(){

	"use strict";
	
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();

		if (top > batas) {
			jQuery('.navbar-main').addClass('stiky');
		} else {
			jQuery('.navbar-main').removeClass('stiky'); 
		}
	});
	
	
	/* =================================
	FAQ
	=================================== */
	$('.panel-heading a').on('click', function() {
		$('.panel-heading').removeClass('active');
		$(this).parents('.panel-heading').addClass('active');
	});

});




  
  