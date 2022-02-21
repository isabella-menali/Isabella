var triangulo;
function setup() {
  createCanvas(400, 400);
  triangulo= createSprite(300, 200, 30,30);
}

function draw() {
  background(30);
drawSprites();
if (keyIsDown(UP_ARROW) ) {
  triangulo.y=triangulo.y-4;
}
if (keyIsDown(DOWN_ARROW) ) {
  triangulo.y=triangulo.y +4;
}
if (keyIsDown(LEFT_ARROW) ) {
  triangulo.x=triangulo.x-4;
}
if (keyIsDown(RIGHT_ARROW) ) {
  triangulo.x=triangulo.x+4;
}
}
