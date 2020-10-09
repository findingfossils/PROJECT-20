var speed,wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = "black"


  speed = random(55,90)
  weight = random(400,1500)
  car = speed;

}

function draw() {
  background(255,255,255);  


  if (isTouching(car,wall)){
    
    deformation = (0.5*weight*speed*speed)/2500

    if (deformation < 100){
      car.shapeColor = "green"

    }

    else if (deformation < 180){

      car.shapeColor = "yellow"

    }

    else{
      car.shapeColor = "red"
    }
    }

  
  


  drawSprites();
}

function isTouching(obj1, obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) 
  {

  return true
    }

  else
  {
  return false
  }
}