var cat,catImg,catImg2,catImg3
var mouse,mouseImg,mouseImg2,mouseImg3
var Garden,GardenImg
function preload() {
    //load the images here
    GardenImg = loadImage("images/garden.png")
    mouseImg = loadImage("images/mouse1.png")
    mouseImg2 =loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadImage("images/mouse4.png")
    catImg = loadImage("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadImage("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    Garden = createSprite(500,400,10,10)
    Garden.addImage("bg",GardenImg)
    //create tom and jerry sprites here
    cat = createSprite(800,600,10,10)
    cat.addImage("cat",catImg)
    cat.scale = 0.2

    mouse = createSprite(150,600,10,10)
    mouse.addImage("mouse",mouseImg)
    mouse.scale = 0.2

    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x - 200< (cat.width - mouse.width)/2){
       cat.addAnimation("cat3",catImg3)
       cat.changeAnimation("cat3",catImg3)
       cat.velocityX = 0
       mouse.addAnimation("mouse3",mouseImg3)
       mouse.changeAnimation("mouse3",mouseImg3)
       cat.scale = 0.25
       cat.x = 300
    }
    
    drawSprites();
}
function keyPressed(){

    if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse2",mouseImg2)
    mouse.changeAnimation("mouse2",mouseImg2)
    cat.addAnimation("cat2",catImg2)
    cat.changeAnimation("cat2",catImg2)
    cat.velocityX = -3
    cat.scale = 0.3
    }
    
  //For moving and changing animation write code here


}

