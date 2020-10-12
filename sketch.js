var move, still, ob,ob1;

function setup() {
  createCanvas(800,400);
  still = createSprite(400, 200, 50, 50);
  still.shapeColor = "red";
  move = createSprite(100,200,50,50);
  move.shapeColor = "red";
 //move.velocityX = 2;
  ob = createSprite(500, 200,50,50);
  ob1 = createSprite(300, 200,50,50);
  ob.shapeColor = "red";
  ob1.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
 move.y = World.mouseY;
  move.x = World.mouseX; 
 
  console.log(still.x-move.x);
  /* var contain = touch(move,ob1);


if (contain === true)
{
  move.shapeColor = "orange";
ob1.shapeColor = "yellow";
} */
if(touch(move,ob1))
{
  move.shapeColor = "orange";
  ob1.shapeColor = "yellow"
}
 if(touch(move,ob)){
  move.shapeColor = "orange";
  ob.shapeColor = "yellow"
}

if(touch(move,still))
{
  move.shapeColor = "orange";
  still.shapeColor = "yellow"
}

 if(touch(move,ob1)===false )
{
  move.shapeColor = "red";
  ob1.shapeColor = "red";
} 

if(touch(move,ob)===false)
{
  move.shapeColor = "red";
  ob.shapeColor = "red";
} 

if(touch(move,still)===false)
{
  move.shapeColor = "red";
  still.shapeColor = "red";
} 

 /*  Boff(move,still);
  Boff(move,ob);
  Boff(move,ob1); */
  drawSprites();
}



