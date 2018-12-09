// global variables

const presidents = ['kennedy', 'johnson', 'nixon', 'ford', 'carter', 'reagan', 'bush', 'clinton'];

const currentPrez = presidents[Math.floor(Math.random() * presidents.length)];

const solution = [];

const unused = [];

let guess = currentPrez.length;

for (i = 0; i < currentPrez.length; i++) {
	solution[i] = ' _ ';
}

let totalGuesses = currentPrez.length + 4;

let wins = 0;

let losses = 0;

const start = document.getElementById('start');

const game = document.getElementById('game');

const on = document.getElementById('on');

const answer = document.getElementById('answer');

const wrong = document.getElementById('wrong');

const victory = document.getElementById('wins');

const defeat = document.getElementById('losses');

// game code

document.onkeypress = function (event) {
	start.style.visibility = 'hidden';
	game.style.display = 'block';
	on.style.display = 'block';
	victory.textContent = wins;
	defeat.textContent = losses;
	let userInput = event.key;
	//match
	if (guess > 0) {
		for (j = 0; j < currentPrez.length; j++) {
		if (userInput === currentPrez[j]) {
			solution.splice([j], 1, userInput);
			guess--;
			}
		} 
		answer.textContent = solution.join(' ');
	//no match
	} if ((solution.includes(userInput) === false) && unused.includes(userInput) === false) {
		unused.push(userInput);
		wrong.textContent = unused.join(' ');
		totalGuesses--;
		on.textContent = ('Unused Letters - ' + totalGuesses + ' Remaining')
	//win condition
	} if (guess === 0) {
		wins++;
		start.style.visibility = 'visible';
		start.textContent = 'Well Done!';
	//loss condition
	} if (totalGuesses === 0) {
		losses++;
		start.style.visibility = 'visible';
		start.textContent = 'Game Over!';
	} 
}