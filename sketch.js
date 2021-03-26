const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,stone,iron,rubber,sand1,sand2,sand3,sand4,sand5,sand6,sand9,sand7,sand8,sand10;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(200,400,150,100)
    iron = new  Iron(800,200)
    rubber = new Rubber(500,600,80)

    sand1 = new Sand(300,300,10)
    sand2 = new Sand(400,300,10)
    sand3 = new Sand(500,300,10)
    sand4 = new Sand(600,300,10)
    sand5 = new Sand(700,300,10)
    sand6 = new Sand(800,300,10)
    sand7 = new Sand(900,300,10)
    sand8 = new Sand(950,300,10)
    sand9 = new Sand(1100,300,10)
    sand10 = new Sand(1000,300,10)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display()
    stone.display();
    iron.display();
    rubber.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand4.display();
    sand8.display();
    sand9.display();
    sand10.display();
}