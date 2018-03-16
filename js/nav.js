var nav = document.getElementById("nav");
var menu;


function createDiv () {
	var newDiv = '<div id="menu">&#9776;</div>';
	nav.insertAdjacentHTML(
		"beforebegin",
		newDiv
	);
}
createDiv();

menu = document.getElementById("menu");




menu.addEventListener(
	"click",
	function () {
		var navListClass = nav.classList;
		if (navListClass.contains("display")) {
			navListClass.remove("display");
		}
		else {
			navListClass.add("display");
		}
	}
);
















































// NOT IN USE

// function carousel () {

// 	var items = document.getElementById("carousel").querySelectorAll("li");


// 	for (var i = 1; i < items.length; i++) {
// 		items[i].classList.add("hidden");
// 	}

// 	items[0].classList.add("active");


// function nextSlide () {
// 	var elementPosition;
	
// 	for (var k = 0; k < items.length; k++) {
		
// 		if (items[k].classList.contains("active")) {
// 			items[k].classList.remove("active");
// 			items[k].classList.add("hidden");
// 			elementPosition = k;
// 		}
		
// 	}
	
// 		if (elementPosition === (items.length - 1)) {
// 		  items[0].classList.remove("hidden");
// 		  items[0].classList.add("active");
// 		}
// 		else {
// 		  items[elementPosition + 1].classList.remove("hidden");
// 	      items[elementPosition + 1].classList.add("active");
// 		}
// }



// function prevSlide () {
// 	var elementPosition;
	
// 	for (var c = 0; c < items.length; c++) {
		
// 		if (items[c].classList.contains("active")) {
// 			items[c].classList.remove("active");
// 			items[c].classList.add("hidden");
// 			elementPosition = c;
// 		}
// 	}

// 		if(elementPosition === 0) {
// 		    items[items.length - 1].classList.remove("hidden");
// 		    items[items.length - 1].classList.add("active");
// 		}
// 		else {
// 			items[elementPosition - 1].classList.remove("hidden");
// 		    items[elementPosition - 1].classList.add("active");
// 		}
		
// }




// var controlPrev = document.getElementById("control-prev");
// var controlNext = document.getElementById("control-next");


// controlNext.addEventListener(
// 	"click",
// 	nextSlide
// );


// controlPrev.addEventListener(
// 	"click",
// 	prevSlide,
// 	false
// );

// }

// window.onload = carousel;