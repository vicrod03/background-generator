var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function getRandom () {
	var letters = '0123456789ABCDEF';
	var color1_r = '#';
	var color2_r = '#';

	for (i=0; i<6; i++) {
		color1_r += letters[Math.floor(Math.random() * 16)];
		color2_r += letters[Math.floor(Math.random() * 16)];
	}

	body.style.background = "linear-gradient(to right, " + 
							color1_r + ", " + color2_r + ")";

	css.textContent = body.style.background + ";";
}

function setGradient () {
	body.style.background = "linear-gradient(to right, " +
	color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", getRandom);
