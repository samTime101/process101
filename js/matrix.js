//https://gist.github.com/Techgokul/e434ea602bda6840d5ebf95c4be5ebeb 

// DISCLAIMER :DONT EDIT THE CONTENTS AND CODE
var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var english = "PROCESS 101";
english = english.split("");

var font_size = 15;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
	drops[x] = 1;


//drawing the characters
function draw() {
	if (c.height !== window.innerHeight || c.width !== window.innerWidth) {
		c.height = window.innerHeight;
		c.width = window.innerWidth;
	}

	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#00FF00";
	ctx.font = font_size + "px arial";
	for (var i = 0; i < drops.length; i++) {
		var text = english[Math.floor(Math.random() * english.length)];
		ctx.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 35);
