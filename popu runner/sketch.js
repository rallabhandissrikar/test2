var canvas;
var database;
var playerCount;
var gameState = 0;
var player, form, game;
var ath1, ath2, ath3, ath4,allath;
var allPlayers;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //form = new Form();
  //form.show();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //player = new Player();
  //player.getCount();
}

function draw() {
  background("yellow");
  if (playerCount === 4) {
  	game.update(1);
  }
  if (gameState === 1) {
  	game.play();
  }
}
