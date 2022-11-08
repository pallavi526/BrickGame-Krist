var brickImage , ballImage , paddleImage
var paddle
function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  brickImage = loadImage("assets/brick.png")
  ballImage = loadImage("assets/ball.png")
  paddleImage = loadImage("assets/paddle.png")
}

function setup() {
  canvas = createCanvas(800, 600);

ball = createSprite(400,300,20,20)
ball.addImage("ball",ballImage)
ball.scale = 0.2

paddle = createSprite(400,500,20,20)
paddle.addImage("paddle",paddleImage)
paddle.scale = 0.5


}
 function draw(){
  background(backgroundImage)

  paddle.x = mouseX
  /*if(keyDown(RIGHTARROW)){
    paddle.x = paddle.x + 5
  }*/

  drawSprites()
 }