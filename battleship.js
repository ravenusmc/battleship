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

model.fire("53");

model.fire("26");
model.fire("06");
model.fire("16");

model.fire("24");
model.fire("34");
model.fire("44");
