
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode button event listeners
	setupModeButtons();

	//square click listeners
	setupSquares();

	//generates colors
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else if (this.textContent === "Hard") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				for(var i = 0; i < squares.length; i++){
					squares[i].classList.remove("hvr-pulse");
				}
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random number from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//empty span
	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].classList.add("hvr-pulse");
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//make string
	return"rgb(" + r + ", " + g + ", " + b + ")";
}