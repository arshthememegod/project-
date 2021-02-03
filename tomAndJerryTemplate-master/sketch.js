var cat,catrunning,sit,catImg2
var mouse,sad,mousey
var bg,bgimage


function preload(){
sit =loadImage("images/cat1.png")
mousey =loadImage("images/mouse2.png")
bgimage =loadImage("images/garden.png")
catrunning =loadImage("images/cat2.png")
sad =loadImage("images/mouse4.png")
}
function setup (){
createCanvas(1200,600)
cat = createSprite(1100,400,50,50)
cat.debug=true
cat.addImage(catrunning)
cat.scale=0.1
mouse =createSprite(100,400,50,50)
mouse.scale=0.05
mouse.addImage(mousey)


}
function draw(){
background(bgimage)
drawSprites();
if(cat.isTouching(mouse)){
  cat.velocityX=0
  cat.addImage(sit)
  mouse.addImage(sad)
}

}

function keyPressed(){
    if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
   cat.addAnimation("catRunning",catImg2)
  cat.changeAnimation("catRunning")
    }
   
    }
    
  

 








