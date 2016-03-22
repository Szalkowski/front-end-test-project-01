$(function(){
	$( "nav li a" ).first().addClass( "current" );

	$('nav li').click(function ( e ) {
		e.preventDefault();
		$("nav li a.current").removeClass("current");
		$("a", this).addClass("current");
	});
	
	$('#social a').click(function (e) {
		e.preventDefault();
	});
	
	$('.contimages a').click(function (e) {
		e.preventDefault();
	});
});