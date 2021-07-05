var canvas;
var music;
var surfaceGreen, surfaceRed, surfaceOrange, surfaceBlue;
var box;
var rand, randomVelocity, randomVelocityX;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surfaceGreen = createSprite(700, 600, 200, 50);
    surfaceGreen.shapeColor = "green";

    surfaceRed = createSprite(510, 600, 200, 50);
    surfaceRed.shapeColor = "red";

    surfaceOrange = createSprite(310, 600,200, 50);
    surfaceOrange.shapeColor = "orange";

    surfaceBlue = createSprite(100, 600, 210, 50);
    surfaceBlue.shapeColor = "blue";

    //create 4 different surfaces
    randomVelocity = Math.round(random(3, 10));
    randomVelocityX = Math.round(random(3, 10));

    box = createSprite(500, 100, 50, 50);
    box.shapeColor = "white";
    box.velocityY = randomVelocity;
    box.velocityX = randomVelocityX;

    rand = Math.round(random(20,750));
    box.x = rand;

    

    //create box sprite and give velocity

}

function draw() {
    background(180);
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(box.isTouching(surfaceGreen)){
        box.shapeColor = "green";
        box.bounceOff(surfaceGreen);
    }

    if(box.isTouching(surfaceRed)){
        box.shapeColor = "red";
        box.bounceOff(surfaceRed);
    }

    if(box.isTouching(surfaceOrange)){
        box.shapeColor = "orange";
        box.bounceOff(surfaceOrange);
    }

    if(box.isTouching(surfaceBlue)){
        box.shapeColor = "blue";
        box.bounceOff(surfaceBlue);
    }
    //create edgeSprite
   

drawSprites();
    //add condition to check if box touching surface and make it box
}
