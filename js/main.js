var _defaultPage = 'portfolio';

var pageLoad = function() {
	loadContent(_defaultPage);
}

//Asynchronously populate main tag with contents
var loadContent = function(pageName) {
	//Asynchronously load content into main tag
	$('main').load(pageName + '.html');
	//load(pageName + '.html', document.querySelector('main'));

	//Set page name in header
	document.querySelector('header#right').innerHTML = pageName;

	//Toggle active menu background:
	var activeNavItem = document.querySelector('.active');
	if (activeNavItem != null) activeNavItem.classList.remove('active');
	document.querySelector('nav #' + pageName).classList.add('active');
	
	return true;
}

/** Asynchronously populate an element with content from a URL.  Half working. **/
function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText; 
}