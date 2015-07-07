var _defaultPage = 'portfolio';

var pageLoad = function() {
	console.log('building page');
	loadContent(_defaultPage);
}

//Asynchronously populate main tag with contents
var loadContent = function(pageName) {
	$('main').load(pageName + '.html', function() {
		$('#scrim').click();
	});
	
	$('header#right').html(pageName);
	$('nav a').css('font-weight', 'normal');
	$('a#' + pageName).css('font-weight', 'bold');
}