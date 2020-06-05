class Player {
  constructor() {
    this.name = name;
    this.index = null;
    this.distance = 0;
  }

  getCount() {
    var ref = database.ref("playerCount");
    ref.on("value", function(data) {
      playerCount = data.val();
    }, function(err) {
		alert(err);
	})
  }

  updateCount(count) {
	  var ref = database.ref("/");
	  ref.update({
		  playerCount : count
	  })
  }

  update(){
      var playerIndex = "athelets/athelet" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }

    static getPlayerInfo() {
      database.ref("athelets").on("value", (data) => {
        allPlayers = data.val();
      })
    }
}
