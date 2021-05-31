const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(960,300,60);
    stone = new Stone(810,300,80,80);
    iron = new Iron(400, 400, 64, 40);

}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();    
    rubber.display();
    stone.display();
    iron.display();
}