var bullet, wall
var thickness;


function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 210, 30, 10);
  bullet.shapeColor = "white";

  


  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor=rgb(80,80,80);


  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;

}

function draw() {
  background("black");

  if (hasCollided(bullet, wall)) {

   bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";

    } else

      if (damage <= 10) {
        wall.shapeColor = rgb(0,255,0);

      }


    console.log(damage);
  }

  drawSprites();
}
function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width / 2;
  wallLeftEdge = wall.x - wall.width / 2;
  if (bulletRightEdge >= wallLeftEdge) {
    //bullet.velocityX=0;
    return true;

  }
  else return false;
}