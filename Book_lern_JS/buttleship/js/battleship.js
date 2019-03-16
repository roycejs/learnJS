var messageKill = "You sank my battleship !!!";
var messageHit = "You damaged my ship!"
var messageMiss = "YOU missed!";

var ship1 = { location1: 30, location2: 31, location3: 32,
			  
			};

function massageDisplay(msg) {
	var messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
}
function displayHit (location) {
	var locHit = document.getElementById(location);
	locHit.setAttribute("class", "hit");
}
function displayMiss (location) {
	var locMiss = document.getElementById(location);
	console.log(locMiss);
	locMiss.setAttribute("class", "miss");
}

function obtainCoordinates (a, b) {
	a = a.toString();
	a = a.toUpperCase();
	switch (a) {
		case "A":
		a = 0;
		break;
		case "B":
		a = 1;
		break;
		case "C":
		a = 2;
		break;
		case "D":
		a = 3;
		break;
		case "E":
		a = 4;
		break;
		case "F":
		a = 5;
		break;
		case "G":
		a = 6;
		break;
	}

	b = b.toString();
	var loc = a + b;
	return loc;
}





//var locat = obtainCoordinates ("a", 3);
//console.log(locat);

// massageDisplay(messageMiss);
//displayHit(locat);
// displayMiss("45");





