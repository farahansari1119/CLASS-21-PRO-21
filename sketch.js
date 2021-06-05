var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(110,585,180,20);
    rect1.shapeColor="red";
    rect2 = createSprite(300,585,180,20);
    rect2.shapeColor="green";
    rect3 = createSprite(490,585,180,20);
    rect3.shapeColor="yellow";
    rect4 = createSprite(680,585,180,20);
    rect4.shapeColor="blue";

    //create box sprite and give velocity
    box = createSprite(400,10,30,30);
    box.shapeColor= "white";
    box.velocityX = -5;
    box.velocityY = 5;
}

function draw() {
   background("black");
    //create edge
    edges = createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(box.isTouching(rect1)){
    box.shapeColor = "red"  
    box.bounceOff(rect1);
    }
    if(box.isTouching(rect2)){
        box.shapeColor = "green"  
           box.bounceOff(rect2);
       }
       
       if(box.isTouching(rect3)){
        box.shapeColor = "yellow"  
       box.velocityX=0
           box.velocityY=0;
         }
         if(box.isTouching(rect4)){
            box.shapeColor = "blue"  
           box.bounceOff(rect4);
             }
              
    drawSprites();
}
