var dog, sadDog, happyDog; 
var foodobj; 
var foods, foodStock; 
var fedTime, lastFed, feed, addFood; 

function preload(){ 
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}
  
  function setup() {
     database = firebase.database() 
     createCanvas (1000,400); 
     
     foodobj = new Food(); 
     
     foodStock = database.ref(' Food'); 
     foodStock.on("value", readStock); 
     
     dog=createSprite(800, 200,150,150); 
     dog. addImage(sadDog); 
     dog.scale=0.15; 
     
     feed =createButton("Feed the dog"); 
     feed.position(700,95); 
     feed.mousePressed(feedDog); 
     
     addFood = createButton("Add Food"); 
  }