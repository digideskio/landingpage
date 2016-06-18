$(document).ready(function() {
	var waypoint = new Waypoint({
	  	element: document.getElementById("secondFeature"),
	  	handler: function() {
			$(function(){
		    	$(".ctaHeader").typed({
		        	// strings: ["We can't do this alone.", "Join us."],
		        	strings: ["Join us."],
		        	typeSpeed: 50
		    	});
			});
	  	},
	  	offset: 'bottom-in-view'
	});
});