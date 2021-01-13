const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(50,50,20,20);
    ground1 = new Ground(600,390,1200,20);
    dustbin1 = new Dustbin(1050,310,100,150);

}

function draw(){
    background("yellow");
    Engine.run(engine);
ball.display();
ground1.display();
dustbin1.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-300});
    }
}

