const game = new Game();
let bg;
let song;


function preload() {
  game.preloadGame();
}

function setup() {
  bg = loadImage('../assets/black-background.png')
  createCanvas(900, 550);
  game.setupGame();
}

function draw() {
  
  clear();
  background(bg);
  game.drawGame();

  if (keyIsDown(UP_ARROW)) {game.player.moveUp()};
  if (keyIsDown(UP_ARROW) && keyIsDown(32)) {game.player.moveUp()*3};
  if (keyIsDown(DOWN_ARROW)) {game.player.moveDown()};
  if (keyIsDown(DOWN_ARROW) && keyIsDown(32)) {game.player.moveDown()*3};
  if (keyIsDown(LEFT_ARROW)) {game.player.moveLeft()};
  if (keyIsDown(LEFT_ARROW) && keyIsDown(32)) {game.player.moveLeft()*3};
  if (keyIsDown(RIGHT_ARROW)) {game.player.moveRight()};
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(32)) {game.player.moveRight()*3};
  


}





