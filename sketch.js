const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var building;

function preload() {

}

function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    
    monster = new Building(900,400,100);
    //building2 = new Building(400,400,180,100);
    // building3 = new Building(400,500,200,100);
    // building4 = new Building(400,200,140,100);

    ball =new Stone(200,300,100);

    slingShot = new SlingShot(ball.body,{x:200 , y:300});

    ground = new Ground(600,600,2000,10);
    g = new Ground(500,400,1100,10);
    bg = loadImage("GamingBackground.png");
    b1 = new Block(500,360,40,40);
    b2 = new Block(560,360,40,40);
    b3 = new Block(620,360,40,40);
    b4 = new Block(680,360,40,40);
    b5 = new Block(530-1,250,100,20);
    b6 = new Block(650-1,250,100,20);
    b7 = new Block(530,200,40,40);
    b8 = new Block(650,200,40,40);
    b9 = new Block(590,150,160,20);
    b10 = new Block(550,100,40,40);
    b11 = new Block(630,100,40,40);
    b12 = new Block(590,50,120,20);
    b13 = new Block(630,10,30,70);
    b14 = new Block(550,10,30,70);
    b15 = new Block(450,20,10,250);
    b16 = new Block(730,20,10,250);

}

function draw(){
   background(bg);

    Engine.update(engine);

    monster.display();
    /*building2.display();
    building3.display();
    building4.display();*/
    strokeWeight(5);
    stroke("black");
    textSize(40);
    fill("skyblue");
    text("drag superhero with mouse and kill the monster",200,500);

    ground.display();
    g.display();
    ball.display();
    //slingShot.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
   

}
function mouseDragged(){
    //Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    slingShot.dragged();
}


/*function mouseReleased(){
    slingshot.fly();
}*/


  