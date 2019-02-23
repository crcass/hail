var start = document.getElementById('start');

var prez = document.getElementById('prez');

var on = document.getElementById('on');

var answer = document.getElementById('answer');

var wrong = document.getElementById('wrong');

var victory = document.getElementById('wins');

var defeat = document.getElementById('losses');

var resetText = document.getElementById('reset-text');

var mobileInput = document.getElementById('mobile-input');

var hail = new Audio('./assets/audio/hailtothechief.mp3');

var presidents = [
   'taft',
   'wilson',
   'harding',
   'coolidge',
   'hoover',
   'roosevelt',
   'truman',
   'eisenhower',
   'kennedy',
   'johnson',
   'nixon',
   'ford',
   'carter',
   'reagan',
   'bush',
   'clinton'
];

var currentPrez = presidents[Math.floor(Math.random() * presidents.length)];

var guess = currentPrez.length;

var totalGuesses = currentPrez.length + 4;

var userInput;

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

   start: function() {
      start.style.visibility = 'hidden';
      resetText.style.visibility = 'hidden';
      prez.style.display = 'block';
      on.style.display = 'block';
      victory.textContent = game.wins;
      defeat.textContent = game.losses;
      answer.textContent = this.solution.join(' ');
      wrong.textContent = '';
   },

   match: function() {
      if (!this.solution.includes(userInput)) {
         for (j = 0; j < currentPrez.length; j++) {
            if (userInput === currentPrez[j]) {
               this.solution.splice([j], 1, userInput);
               guess--;
            }
         }
      }
      answer.textContent = game.solution.join(' ');
   },

   noMatch: function() {
      if (userInput.match(/[A-Za-z]/g)) {
         this.unused.push(userInput);
         wrong.textContent = this.unused.join(' ');
         on.textContent = 'Unused Letters - ' + totalGuesses + ' Remaining';
         totalGuesses--;
      }
   },

   winCond: function() {
      this.wins++;
      victory.textContent = this.wins;
      start.style.visibility = 'visible';
      start.textContent = 'Well Done!';
      resetText.style.visibility = 'visible';
      hail.play();
      document.onkeyup = null;
      document.activeElement.blur();
   },

   loseCond: function() {
      this.losses++;
      defeat.textContent = this.losses;
      start.style.visibility = 'visible';
      start.textContent = 'Game Over!';
      resetText.style.visibility = 'visible';
      document.onkeyup = null;
      document.activeElement.blur();
   },

   reset: function() {
      currentPrez = presidents[Math.floor(Math.random() * presidents.length)];
      guess = currentPrez.length;
      totalGuesses = currentPrez.length + 4;
      this.solution = [];
      this.unused = [];
      this.setup();
   },

   kbHandler: function() {
      on.textContent = 'Unused Letters - ' + totalGuesses + ' Remaining';
   },

   mobile: (document.ontouchend = function() {
      mobileInput.style.visibility = 'visible';
      mobileInput.focus();
      mobileInput.style.visibility = 'hidden';
   })
};

// setup game board
game.setup();

// game
var gameLoop = function(event) {
   game.start();
   game.kbHandler();
   game.mobile();
   document.onkeyup = function(event) {
      userInput = event.key;
      game.kbHandler();
      if (guess > 0) {
         game.match();
      }
      if (
         game.solution.includes(userInput) === false &&
         game.unused.includes(userInput) === false
      ) {
         game.noMatch();
         game.kbHandler();
      }
      if (guess === 0) {
         game.winCond();
         game.reset();
      }
      if (totalGuesses === 0) {
         game.loseCond();
         game.reset();
      }
   };
};

// event listeners for game loop
document.addEventListener('click', gameLoop, false);
document.addEventListener('touchend', gameLoop, false);
