var dog, happyDog;
var foodS, foodStock; 
var database;

function preload()
{
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");


	//load images here
}

function setup() {
  createCanvas(500, 500);
  background(46, 139, 87)

 
  dog = createSprite(250,250,50,50);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
  
}


function draw() {  
  database = firebase.database();

  drawSprites();
  //add styles here
}

function writeStock(){

}


function keyPressed(){
  if (keyWentDown = UP_ARROW){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
}

