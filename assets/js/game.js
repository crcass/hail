// global variables

const presidents = ["kennedy", "johnson", "nixon", "ford", "carter", "reagan", "bush", "clinton"];

const currentPrez = presidents[Math.floor(Math.random() * presidents.length)];

const solution = [];

const guess = [];

let attempt = currentPrez.length;

for (i = 0; i < currentPrez.length; i++) {
	solution[i] = " _ ";
}

// game code

document.onkeydown = function(e) {
	document.getElementById("start").style.display = "none";
	let gameStart = event.key;
	if (attempt > 0) {
		for (j = 0; j < currentPrez.length; j++) {
		if (gameStart === currentPrez[j]) {
			solution.splice([j], 1, gameStart);
			attempt--;
			}
		} 
		document.getElementById("prez").innerHTML = solution.join(" ");
	} else if (attempt === 0) {
		document.getElementById("win").style.display = "block";
	}
}