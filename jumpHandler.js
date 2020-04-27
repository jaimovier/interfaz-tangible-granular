


autowatch = 1;
outlets = 1;
setoutletassist(0,"valores de jumps (lista)");

var jumpValues = new Array;
var maxLength;
var jumps = 5;
var delta;


function jumpHandler(pos,distance,length){
	maxLength = length-pos;
	delta = (maxLength*distance)/4;
	for (var i = 0; i < jumps; i++){
		jumpValues[i] = pos + i*delta;
		
	}
	outlet(0,jumpValues);

}
	
	




