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
// 2. Add 2000 divs with the class "shape" to container
// 3. Create div element with a class "shape"
// 4. Add div to container
// 5. Add variation classes based on counter

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