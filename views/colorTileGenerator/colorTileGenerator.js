var colors = [];
var tiles = document.querySelectorAll(".tile");
var colorDisplay = document.querySelector("#displayColor");
var newColors = document.querySelector(".reset");
var h1 = document.querySelector("h1");

init();



newColors.addEventListener("click", function(){
	reset();
})

function init(){
	tileSetup();
	reset();
}

function tileSetup(){
	for(var i = 0; i <tiles.length; i++){
		tiles[i].addEventListener("click", function(){
			for(var i = 0; i<tiles.length; i++){
				tiles[i].classList.remove("active");
			}
			var selectedColor = this.style.backgroundColor;
			h1.style.backgroundColor = selectedColor;
			colorDisplay.textContent = selectedColor;
			this.classList.add("active");
		}); 
	}
}

function reset(){
	colors = generateRandomColors(tiles.length);
	for(var i = 0; i < colors.length; i++){
		tiles[i].style.backgroundColor = colors[i];
		tiles[i].classList.remove("active");
	}
	colorDisplay.textContent = "Select a Color!";
	h1.style.backgroundColor = "#232323";
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(generateColor());
	}
	return arr;
}

function generateColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = "rgb(" + r + ", " + g+ ", " + b + ")";
	return color; 
}