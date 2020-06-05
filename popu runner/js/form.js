class Form {
  constructor() {
    this.title = createElement("h1");
    this.input =  createInput("Name here");
    this.submit = createButton("Play the game");
    this.greet = createElement("h3");

  }

  close() {
    this.title.hide();
    this.input.hide();
    this.submit.hide();
    this.greet.hide();  
  }

  show() {
    this.title.html("pop runner")
    this.input.position(windowWidth/2, windowHeight/2);
    this.title.position(windowWidth/2, 40);
    this.submit.position(windowWidth/2, windowHeight/2 + 100);

    this.submit.mousePressed(() => {
      this.input.hide();
      this.submit.hide();
      player.name = this.input.value();
	  //var name = player.name
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greet.html("hellow - " + player.name);
      this.greet.position(windowWidth/2, windowHeight/2);

    })
  }
}
