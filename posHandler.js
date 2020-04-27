autowatch = 1;
var tot = 100;
var prob = [100,0,0,0,0];
var probArray = new Array(100);
var index = 0;
var num = 0;

function posHandler(jumpValue){
	index = 0;
	num = 0;
	
	if (jumpValue < 2){
		prob[0] = Math.ceil(tot/jumpValue);
		prob[1] = tot-prob[0];
		prob[2] = 0;
		prob[3] = 0;
		prob[4] = 0;
	} else if (jumpValue < 3) {
		prob[0] = Math.ceil(tot/jumpValue);
		prob[1] = Math.ceil(tot/jumpValue);
		prob[2] = tot-prob[0]-prob[1];
		prob[3] = 0;
		prob[4] = 0;
	} else if (jumpValue < 4) {
		prob[0] = Math.ceil(tot/jumpValue);
		prob[1] = Math.ceil(tot/jumpValue);
		prob[2] = Math.ceil(tot/jumpValue);
		prob[3] = tot-prob[0]-prob[1]-prob[2];
		prob[4] = 0;	
	} else if (jumpValue <= 5) {
		prob[0] = Math.ceil(tot/jumpValue);
		prob[1] = Math.ceil(tot/jumpValue);
		prob[2] = Math.ceil(tot/jumpValue);
		prob[3] = Math.ceil(tot/jumpValue);
		prob[4] = tot-prob[0]-prob[1]-prob[2]-prob[3];	
	}  

	while (index < 100 && num < 5){
		for (var i = index; i < prob[num]; i++){
			probArray[i] = num+1;
			index++;
		}
		num += 1;	
	}
	outlet(0,probArray);
}