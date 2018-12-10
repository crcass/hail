var start = document.getElementById('start');

var prez = document.getElementById('prez');

var on = document.getElementById('on');

var answer = document.getElementById('answer');

var wrong = document.getElementById('wrong');

var victory = document.getElementById('wins');

var defeat = document.getElementById('losses');

var resetText = document.getElementById('reset-text');

var hail = new Audio('./assets/audio/hailtothechief.mp3')

var presidents = ['kennedy', 'johnson', 'nixon', 'ford', 'carter', 'reagan', 'bush', 'clinton'];

var currentPrez = presidents[Math.floor(Math.random() * presidents.length)];

var guess = currentPrez.length;

var totalGuesses = currentPrez.length + 4;

var userInput

var game = {

	solution: [],
	unused: [],
	wins: 0,
	losses: 0,

	setup: function() {
		for (i = 0; i < currentPrez.length; i++) {
			this.solution[i] = ' _ ';
			}
	},

	match: function() {
		for (j = 0; j < currentPrez.length; j++) {
			if (userInput === currentPrez[j]) {
				this.solution.splice([j], 1, userInput);
				guess--;
				}
			} 
			answer.textContent = this.solution.join(' ');
	},

	noMatch: function() {
		this.unused.push(userInput);
		wrong.textContent = this.unused.join(' ');
		totalGuesses--;
		on.textContent = ('Unused Letters - ' + totalGuesses + ' Remaining')
	},

	winCond: function() {
		this.wins++;
		victory.textContent = this.wins;
		start.style.visibility = 'visible';
		start.textContent = 'Well Done!';
		resetText.style.visibility = 'visible';
		hail.play();
	},

	loseCond: function() {
		this.losses++;
		defeat.textContent = this.losses;
		start.style.visibility = 'visible';
		start.textContent = 'Game Over!';
		resetText.style.visibility = 'visible';
	},

	reset: function() {
		currentPrez = presidents[Math.floor(Math.random() * presidents.length)];
		guess = currentPrez.length;
		totalGuesses = currentPrez.length + 4;
		this.solution = [];
		this.unused = [];
		this.setup();
	}
};

// setup game board
game.setup();

//game
document.onkeypress = function (event) {
	start.style.visibility = 'hidden';
	resetText.style.visibility = 'hidden';
	prez.style.display = 'block';
	on.style.display = 'block';
	victory.textContent = game.wins;
	defeat.textContent = game.losses;
	userInput = event.key;
	//match
	if (guess > 0) {
		game.match();
	//no match
	} if ((game.solution.includes(userInput) === false) && (game.unused.includes(userInput) === false)) {
		game.noMatch();
	//win condition
	} if (guess === 0) {
		game.winCond();
		game.reset();
	//loss condition
	} if (totalGuesses === 0) {
		game.loseCond();
		game.reset();
	} 
};
