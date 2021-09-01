/* Your JS here. */
var hidenElement = document.getElementById("hide")
function showHidingInfo() {
	document.getElementById("container").insertBefore(hidenElement, document.getElementById("box"));
} 

function hideHidingInfo() {
	document.getElementById("hide").remove();
}

var title = document.getElementById("title");
title.addEventListener(
    "mouseenter",  
	showHidingInfo
);

var photo = document.getElementById("photo");
photo.addEventListener(
	"mouseenter",  
	hideHidingInfo
);

var container = document.getElementById("container");

var red_button = document.getElementById('red');
red_button.addEventListener(
	"click",  
	function() {
		container.style.background = '#8f0606';
	}
);
var blue_button = document.getElementById('blue');
blue_button.addEventListener(
	"click",  
	function() {
		container.style.background = '#2d65df';
	}
);
var gray_button = document.getElementById('gray');
gray_button.addEventListener(
	"click",  
	function() {
		container.style.background = '#646262';
	}
);