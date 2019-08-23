let newGame = new Game();

function setup() {
  createCanvas(800, 800);
  newGame.setup();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  newGame.draw();
  drawSprites();
}
