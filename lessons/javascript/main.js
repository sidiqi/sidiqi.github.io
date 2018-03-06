var sedan = document.getElementById('sedan');
var getCar =  document.getElementById('getCar');
var position = 0;
var id;

getCar.onmouseover = function (){
	if(id) clearInterval(id);
	id = setInterval(toDriveRight, 2)
	}
//снять наведения
getCar.onmouseout = function (){
	if(id) clearInterval(id);
	id = setInterval(toDriveLeft, 2)
}

function toDriveLeft(){
	if(position <= 0){
		clearInterval(id);
	}else{
		position --;
		sedan.style.left = position + 'px';
	}

}

function toDriveRight(){
	if(position >= 450){
			clearInterval(id);
	}else{
		position ++;
		sedan.style.left = position + 'px';
	}

}