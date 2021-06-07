var t,wall

var speed,weight

function setup() {


  createCanvas(1229,400);

  speed=random(50,99);
  
  weight=random(400,1500);

  t= createSprite(400, 200, 50, 50);
 
  wall= createSprite(1199, 200, 50, height/2);
  
  wall.shapeColor=color(255,155,255)

}

function draw() {
  background(270,250,0);  
 
  if (keyDown("space")) {
    t.velocityX = speed; 
    }
  if(t.collide(wall)){
  if(wall.X-t.X<(t.widht+wall.widht)/2){
 t.velocity=0;
 var deformation=0.5 * weight*speed*speed/22509;
 if(deformation>180){
   t.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   t.shapeColor=color(230,230,0)
 }
 if(deformation<100){
   t.shapeColor=color(0,255,0)
 }
 }}
 

  drawSprites();
}