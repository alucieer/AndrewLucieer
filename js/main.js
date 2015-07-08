var _defaultPage = 'portfolio';

var pageLoad = function() {
	loadContent(_defaultPage);
}

//Asynchronously populate main tag with contents
var loadContent = function(pageName) {
	$('main').load(pageName + '.html');
	
	$('header#right').html(pageName);
	$('nav .nav-item').css('background', 'white');
	$('nav #' + pageName).css('background', '#eceff1');
	
	return true;
}