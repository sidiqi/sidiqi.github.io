var sedan = document.getElementById('sedan');
var getCar = document.getElementById('getCar');
var position = 0;
var id;

getCar.onmouseover = function(){

	sedan.style.transform = 'scale(1, 1)';
	if (id) clearInterval(id);
	id = setInterval(toDriveRight, 2);
}


getCar.onmouseout = function(){
	sedan.style.transform = 'scale(-1, 1)';
	clearInterval(id);
	id = setInterval(toDriveLeft, 2);
}

function toDriveRight() {
	if (position == 500) {
		clearInterval(id);
	} else {
		position ++;
		sedan.style.left = position + 'px';
	}
}

function toDriveLeft() {
	if (position == 0) {
		clearInterval(id);
		sedan.style.transform = 'scale(1, 1)';
	} else {
		position --;
		sedan.style.left = position + 'px';
	}
}