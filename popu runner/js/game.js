class Game {
	constructor() {
		//this.handl = 0;
	}

	getState() {
		var ref = database.ref("gameState");
		ref.on("value", function(data) {
			gameState = data.val();
			//this.handl = data.val();
		}, function(err) {
			console.log(err);
		});
	}

	update(state) {
		var ref = database.ref("/")
		ref.update({
			gameState : state
		});
	}


	start() {
		setTimeout(() => {
		if (gameState === 0) {
			form = new Form();
			form.show();
			player = new Player();
			player.getCount();
		}else {
			var err = createElement("h1");
			err.position(windowWidth/2, windowHeight/2);
			err.html("sorry loby full");
		}
		}, 4000);
		ath1 = createSprite(300,200,30,30);
		ath2 = createSprite(300,400,30,30);
		ath3 = createSprite(300,600,30,30);
		ath4 = createSprite(300,700,30,30);

		allath = [ath1, ath2, ath3, ath4];
	}

	play() {
		form.close();
		Player.getPlayerInfo();
		if (allPlayers !== undefined) {
			var index = 0;
			var x;
			var y = 0;

			for (var plr in allPlayers) {
				index++;
				y = y + 250;
				x = windowWidth - allPlayers[plr].distance;
				allath[index-1].x = x;
				allath[index-1].y = y;
				if (index === player.index) {
					camera.position.x = allath[index - 1].x;
					camera.position.y = displayHeight/2;
					allath[index - 1].shapeColor = "red";
				}
			}
		}
		if (keyIsDown(UP_ARROW) && player.index !== null) {
			player.distance+=5;
			player.update();
		}
	}
}
