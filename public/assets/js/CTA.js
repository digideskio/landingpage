$(document).ready(function() {
	var waypoint = new Waypoint({
	  	element: document.getElementById("download"),
	  	handler: function() {
			$(function(){
		    	$(".ctaHeader").typed({
		        	strings: ["We can't do this alone."],
		        	typeSpeed: 10
		    	});
			});
	  	},
	  	offset: 'bottom-in-view'
	});
});