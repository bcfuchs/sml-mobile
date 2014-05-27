$(document).ready(function() {

	console.log = function(){};
	function toggle_details(e) {
		var t = $(e.target).attr('data-more');
		$('#' + t).toggle();



	}
	function debounce(fun, mil) {
		var timer;
		return function() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				fun();
			}, mil);
		};
	}

	$(".moreclick3").click(function(e) {
		console.log(e);
		if ( $(e.target).hasClass('glyphicon-chevron-down')) {
			$(e.target).removeClass('glyphicon-chevron-down');
			$(e.target).addClass('glyphicon-chevron-up');
		    }
		    else 
			{
			$(e.target).removeClass('glyphicon-chevron-up');
			$(e.target).addClass('glyphicon-chevron-down');

		}
	    });

	$(".moreclick").click(function(e) {
		var f = function() {
		var t = $(e.target).attr('data-more');
		$('#' + t).toggle();

		var src = $(e.target).attr('src');
		
		if ( $(e.target).hasClass('glyphicon-chevron-down')) {
			$(e.target).removeClass('glyphicon-chevron-down');
			$(e.target).addClass('glyphicon-chevron-up');
		    }
		    else 
			{
			$(e.target).removeClass('glyphicon-chevron-up');
			$(e.target).addClass('glyphicon-chevron-down');

		}
		
		}
		f();
	});

	// make sure the navbar collapses after it's clicked. 
	$('#sml-hotdog a').click(function(e) {
		$('#sml-hotdog').collapse('hide')
		    // make sure the details div is open. 
		    if ($(e.target).attr('id') === 'aboutitem-menu') {

			var e2 = jQuery.Event( "click" );
			e2.target = $('#aboutclick1')[0];

			e2.currentTarget = e2.target;
			
			// trigger an artificial click event
			 $( "#aboutclick" ).trigger( e2 );
			 //			 $('#map').scrollIntoView();	
		
		    }

	    })

	if ($("#navgrid").css("min-height") != "240px" ){

	    	$('#navgrid').parallax("100%",0.9);
	$('#geotag').parallax("50%", 0.1);
	$('#heracoli').parallax("50%", 0.1);

	}
	//iphone
setTimeout(function(){
		// Hide the address bar!

	$('body').scrollTop(1);
		window.scrollTo(0, 1);
	    }, 0);

});

	
    