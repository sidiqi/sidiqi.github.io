var numbers = document.getElementsByClassName('numbers');
var input = document.getElementById('entries');
var operations = document.getElementsByClassName('operations');
var oper = ['*', '/', '']


for (var i = 0; i < numbers.length; i++){
	numbers[i].addEventListener('click', function(e){
		input.value += this.innerText;
		indexOf('*')

	})
}

for (var i = 0; i < operations.length; i++){
	operations[i].addEventListener('click', function(e){
		
		var operations = this.innerText;
		var value = input.value;
		oper.filterIndex(function(item){
			
		})
		value.indexOf('*') + 1
		if(!isNaN(value.charAt(value.length - 1))){
			input.value += operations;
		}else{

			value = value.substring(0, value.length -1);
			input.value = value;
			input.value += operations;

		}




		

	})
}