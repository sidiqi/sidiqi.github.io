//Добавление уникальных параметров
var type = document.getElementById('type');

var arr = [];

products.forEach(function (item) {
	if(!arr.includes(item.type))
	arr.push(item.type);
})

arr.forEach(function(item){
	var option = document.createElement('option');
	option.text = item;
	type.appendChild(option);
})


//Динамический вывод товаров
var prod = document.getElementsByClassName('products');
products.forEach(function(item){
	var elEtem = document.createElement('div'); 
	elEtem.className = 'col-md-4 product';

	var img = document.createElement('img'); 
	var name = document.createElement('div');
	var type = document.createElement('div');
	var category = document.createElement('div');
	var color = document.createElement('div');
	var parameter = document.createElement('div');
	img.src = './public/img/' + item.img;
	img.className = 'product-image';
	name.innerText  = item.name;
	type.innerText  = item.type;
	category.innerText  = item.category;
	color.innerText  = item.color;
	parameter.innerText  = item.parameter;

	elEtem.appendChild(img);
	elEtem.appendChild(name);
	elEtem.appendChild(type);
	elEtem.appendChild(category);
	elEtem.appendChild(color);
	elEtem.appendChild(parameter);

	prod[0].appendChild(elEtem);
})


//Обработка выбора параметров