var dog, happyDog, dogIMG;
var foodS, foodStock; 
var database;

function preload()
{
  dogIMG = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");


	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

 
  dog = createSprite(250,250,50,50);
  dog.addImage(dogIMG);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown (UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  
  drawSprites();
  textSize(12);
  stroke("black");
  text("Remaining Food: ", +foodS, 50,50);
  text("Press up arrow to feed milk.",130,10,300,20);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


function keyPressed(){
  if (keyWentDown = UP_ARROW){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
}

