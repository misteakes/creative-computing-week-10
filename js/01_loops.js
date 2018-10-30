
/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

/* TO DO */

// 1. Select container element
// 2. Add 200 divs with the class "shape" to container
// 3. Select all shape divs
// 4. Count how many there are
// 5. Iterate over shape divs to change style

for(var i=0; i<200; i++) {

	// create a div
	var shape = document.createElement('div');

	// add class "shape" to div
	shape.classList.add('shape');

	// select container div
	var container = document.querySelector('.content');

	// add the div to the DOM
	container.append(shape);

}

/* for loops,

for (*number of time/s) {
	
}

var i = 0;
i < 100;
i++ aka i+1 increases the value of i by 1

*/

// select all divs with class "shape"
var shapes = document.querySelectorAll('.shape');

// loop over all of the shapes
shapes.forEach(function(shape, i) {
	// what happens for each element
	// console.log(i);

	var percentage = i / 200 * 100;

	var color = hslColor(i*2, 50, 50);
	shape.style.background = color;
});










 

