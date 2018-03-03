var sedan = document.getElementById('sedan');
var getCar =  document.getElementById('getCar');
var position = 0;
var id;

getCar.onmouseover = function (){
	//console.log('over');
	if(id) clearInterval(id);
	id = setInterval(toDriveRight, 2)
	}
//снять наведения
getCar.onmouseout = function (){
		//console.log('out');
	if(id) clearInterval(id);
	id = setInterval(toDriveLeft, 2)
}

function toDriveLeft(){
	//console.log('out');
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