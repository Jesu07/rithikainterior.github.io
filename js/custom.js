$(document).ready(function(){
	$('.current-year').html((new Date).getFullYear());
	$('.icon').click(function(){
    	$('span').toggleClass("cancel");
    });
});  