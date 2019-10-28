
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

	alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight) + " and the perimeter is " + rectPerim(floatRectWidth, floatRectHeight)+ "\n\n" +
		"The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3) + " and the perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3) + "\n\n" +
		"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));
};


var calcTriPerim = function () {
    var floatSide1 = parseFloat($("tri_side1").value);
	var floatSide2 = parseFloat($("tri_side2").value);	
	var floatSide3 = parseFloat($("tri_side3").value);
    
    alert("The Triangle perimeter is " + triPerim(floatSide1, floatSide2, floatSide3));
};

function triPerim (Side1, Side2, Side3) {
   floatTrianglePerim = Side1 + Side2 + Side3;
   return floatTrianglePerim.toFixed(2);
}


var calcTriArea = function () {
    var floatSide1 = parseFloat($("tri_side1").value);
	var floatSide2 = parseFloat($("tri_side2").value);	
	var floatSide3 = parseFloat($("tri_side3").value);
    
    alert("The Triangle area is " + triArea(floatSide1, floatSide2, floatSide3));
};

function triArea (Side1, Side2, Side3) {
  var floatS = (Side1 + Side2 + Side3)/2;
  var floatTriangleArea = Math.sqrt((floatS*(floatS-Side1)*(floatS-Side2)*(floatS-Side3)));
  return floatTriangleArea.toFixed(2);
}


var calcRectArea = function () {
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    
    alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};


function rectArea (Width, Height) {
    var floatRectArea = Width * Height;
    return floatRectArea.toFixed(2);
}

var calcRectPerim = function () {
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    
    alert ("The rectangle area is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim (Width, Height) {
    var floatRectPerim = 2*Width+2*Height;
    return floatRectPerim.toFixed(2);
}


var calcCircleCircum = function() {
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(Radius) {
	var floatCircum = parseFloat (2 * Math.PI * Radius);
	
    return floatCircum.toFixed(2);
} 

var calcCircleArea = function () {
    var floatRadius = parseFloat($("radius").value);
    
    alert ("The Circle area is " + circleArea(floatRadius));
};

function circleArea(Radius) {
   var floatCircleArea = parseFloat (Math.PI * Math.pow(Radius,2));
   
   return floatCircleArea.toFixed(2);
}


window.onload = function () {

/*
$("rect_width").value = "";
$("rect_height").value = "";
$("tri_side1").value = "";
$("tri_side2").value = "";
$("tri_side3").value = "";
$("radius").value = "";
*/
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTriPerim;
};