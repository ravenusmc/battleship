var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	}, 

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");

	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class","miss");

	}
};

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3, 
	shipsSunk: 0, 
	ships: [{ locations: ["06", "16", "26"], hits: ["","",""]},
					{ locations: ["24", "34", "44"], hits: ["","",""]},
					{ locations: ["10", "11", "12"], hits: ["","",""]}],
	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0 ) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("hit");
				if (this.isSunk(ship)) {
					view.displayMessage("You Sank my battleship!");
					this.shipsSunk++;
				}
				return true; 
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You Missed");
		return false 
	},
	isSunk: function(ship) {

	} 
};

var controller = {
	guesses: 0,
	processGuess: function(guess) {
		//more code here
	},

};

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the keyboard!");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that is not on the board.");	
		} else if (row < 0 || row >= 7 || column < 0 || column >= 7){
			alert("Oops that is off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

console.log(parseGuess("A7"));



