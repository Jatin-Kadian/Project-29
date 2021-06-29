const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas(1000,500);
    engine = Engine.create()
    world = engine.world

    ground1 = new Ground (500, 480, 1000, 10)
    stand1 = new Ground (350, 300, 250, 10)
    stand2 = new Ground (650, 220, 250, 10)
    box1 = new  Box (250,255,30, 40)
    box2 = new  Box (280,255,30, 40)
    box3 = new  Box (310,255,30, 40)
    box4 = new  Box (340,255,30, 40)
    box5 = new  Box (370,255,30, 40)
    box6 = new  Box (400,255,30, 40)
    box7 = new  Box (430,255,30, 40)

    box8 = new  Box (280,215,30, 40)
    box9 = new  Box (310,215,30, 40)
    box10 = new  Box (340,215,30, 40)
    box11 = new  Box (370,215,30, 40)
    box12 = new  Box (400,215,30, 40)

    box13= new  Box (310,175,30, 40)
    box14 = new  Box (340,175,30, 40)
    box15 = new  Box (370,175,30, 40)

    box16 = new  Box (340,135,30, 40)

    box17 = new Box (590, 180, 30, 40)
    box18 = new Box (620, 180, 30, 40)
    box19 = new Box (650, 180, 30, 40)
    box20 = new Box (680, 180, 30, 40)
    box21 = new Box (710, 180, 30, 40)

    box22 = new Box (620, 140, 30, 40)
    box23 = new Box (650, 140, 30, 40)
    box24 = new Box (680, 140, 30, 40)

    box25 = new Box (650, 100, 30, 40)

    pol = Bodies.circle(100, 100,20)
    World.add(world,pol)

    sling1 = new SlingShot(pol, {x:100, y:200})
    World.add(world,sling1)


}

function preload(){

}

function draw (){
  background ("red")
  fill("black")
  textSize(25)
  text("drag and realese the hexagon ", 100, 50)
  Engine.update(engine)
  ground1.display()
  stand1.display()
  stand2.display()
  fill("yellow")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()

 fill("orange")
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box25.display()

  fill("lightblue")
  box13.display()
  box14.display()
  box15.display()
  box22.display()
  box23.display()
  box24.display()
     


  fill("lightgreen")
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  ellipseMode(RADIUS)
  ellipse(pol.position.x,pol.position.y,20)

  sling1.display()
}


function mouseDragged(){
 Matter.Body.setPosition(pol, {x:mouseX , y:mouseY})
}
function mouseReleased(){
    sling1.fly()
}

