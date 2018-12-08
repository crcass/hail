// objects
const kennedy = {
	firstName:"John F.",
	lastName:"Kennedy",
	order:"35th",
	term:"1961-1963",
	lastNameArr:["K", "E", "N", "N", "E", "D", "Y"]
};

const johnson = {
	firstName:"Lyndon",
	lastName:"Johnson",
	order:"36th",
	term:"1963-1969",
	lastNameArr:["J", "O", "H", "N", "S", "O", "N"]
};

const nixon = {
	firstName:"Richard",
	lastName:"Nixon",
	order:"37th",
	term:"1969-1974",
	lastNameArr:["N", "I", "X", "O", "N"]
};

const ford = {
	firstName:"Gerald",
	lastName:"Ford",
	order:"38th",
	term:"1974-1977",
	lastNameArr:["F", "O", "R", "D"]
};

const carter = {
	firstName:"Jimmy",
	lastName:"Carter",
	order:"39th",
	term:"1977-1981",
	lastNameArr:["C", "A", "R", "T", "E", "R"]
};

const reagan = {
	firstName:"Ronald",
	lastName:"Reagan",
	order:"40th",
	term:"1981-1989",
	lastNameArr:["R", "E", "A", "G", "A", "N"]
};

const bush = {
	firstName:"George",
	lastName:"Bush",
	order:"41st",
	term:"1989-1993",
	lastNameArr:["B", "U", "S", "H"]
};

const clinton = {
	firstName:"Bill",
	lastName:"Clinton",
	order:"42nd",
	term:"1993-2001",
	lastNameArr:["C", "L", "I", "N", "T", "O", "N"]
};

const presidents = [kennedy, johnson, nixon, ford, carter, reagan, bush, clinton];

const currentPrez = presidents[Math.floor(Math.random() * presidents.length)];






// game code calls
// for (i = 0; i < presidents.length; i++) {
// 	console.log(`${presidents[i].firstName} ${presidents[i].lastName} was the ${presidents[i].order} President from ${presidents[i].term}`);
// }

// for (i = 0; i < presidents.length; i++) {
// 	for (j = 0; j < presidents[i].lastNameArr.length; j++){
// 		console.log(presidents[i].lastNameArr[j]);
// 	}
// }

let blank = '<span id="blank"> _ </span>';

currentPrez.lastNameArr.forEach(function() {
	document.getElementById("prez").innerHTML += blank;
});

document.onkeyup = function(e) {
	let gameStart = event.key;
	for (i = 0; i < currentPrez.lastNameArr.length; i++) {
		if (gameStart.toUpperCase() === currentPrez.lastNameArr[i]) {
			document.getElementById("blank").innerHTML = currentPrez.lastNameArr[i];
		}
	}
}
		// } else {
// 			// document.getElementById("pres").innerHTML += "<span> _ </span>";

// 		}
// 	}
// }





