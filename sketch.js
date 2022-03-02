

function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 10, 50);
  computer = createSprite(200,300,50,50);
  player = addImg("player.png");
}

function draw() {
  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.end();
    text("You lost");
  }
  background(255,255,255); 
  drawSprites();
  if (player.isTouching(computer)){
    gameState = 2
  }
}