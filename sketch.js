const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//villains
var Joker, Joker_img;
var HarleyQuinn, HarleyQuinn_img;
var DeadShot, DeadShot_img;
var Thanos, Thanos_img;

//good guys
var SpiderMan, SpiderMan_img;

//maze walls
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19;
var wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36;
var wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53;
var wall54, wall55, wall56, wall57, wall58, wall59, wall60, wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70;
var wall71, wall72, wall73, wall74, wall75, wall76, wall77, wall78, wall79, wall80, wall81, wall82, wall83, wall84, wall85, wall86, wall87;
var wall88, wall89, wall90;

//Joker's game
/*var tank, tank_img;
var bomb = [];
var bomb_img;
var invisible_obstacle = [];
*/

function preload(){
  
  Joker_img = loadImage('images/Joker.jpg');
  HarleyQuinn_img = loadImage('images/HarleyQuinn.png');
  DeadShot_img = loadImage('images/Deadshot.jpg');
  Thanos_img = loadImage('images/thanos2.jpg');
  SpiderMan_img = loadImage('images/Spiderman.jpg');

}

function setup(){
createCanvas(1500,750);
  
engine = Engine.create();
world = engine.world;

//center square
wall1 = new Wall(640,320,10,130);
wall2 = new Wall(710,379,130,10);
wall3 = new Wall(770,320,10,130);
wall4 = new Wall(705,260,140,10);

//left down maze
wall5 = new Wall(590,378,90,10);
wall6 = new Wall(574,330,140,10);
wall7 = new Wall(540,435,10,130);
wall8 = new Wall(500,390,10,130);
wall9 = new Wall(430,450,130,10);
wall10 = new Wall(470,495,130,10);
wall11 = new Wall(360,510,10,130);
wall12 = new Wall(410,555,10,130);
wall13 = new Wall(290,568,130,10);
wall14 = new Wall(340,615,130,10);
wall15 = new Wall(220,613,10,100);
wall16 = new Wall(280,660,10,100);
wall17 = new Wall(205,705,160,10);
wall18 = new Wall(145,657,160,10);
wall19 = new Wall(130,725,10,50);
wall20 = new Wall(60,700,10,100);

//right down maze
wall21 = new Wall(835,330,140,10);
wall22 = new Wall(820,380,90,10);
wall23 = new Wall(910,390,10,130);
wall24 = new Wall(865,440,10,130);
wall25 = new Wall(970,460,130,10);
wall26 = new Wall(925,510,130,10);
wall27 = new Wall(1040,520,10,130);
wall28 = new Wall(990,570,10,130);
wall29 = new Wall(1100,590,130,10);
wall30 = new Wall(1060,630,130,10);
wall31 = new Wall(1170,635,10,100);
wall32 = new Wall(1120,675,10,100);
wall33 = new Wall(1245,680,160,10);
wall34 = new Wall(1195,720,160,10);
wall35 = new Wall(1275,735,10,40);
wall36 = new Wall(1320,715,10,80);

//left bottom maze
wall37 = new Wall(640,448,10,150);
wall38 = new Wall(680,468,10,190);
wall39 = new Wall(570,520,150,10);
wall40 = new Wall(610,558,150,10);
wall41 = new Wall(500,590,10,150);
wall42 = new Wall(535,627,10,150);
wall43 = new Wall(430,660,150,10);
wall44 = new Wall(465,697,150,10);
wall45 = new Wall(360,705,10,100);
wall46 = new Wall(390,722,10,60);

//right bottom maze
wall47 = new Wall(770,455,10,165);
wall48 = new Wall(730,468,10,190);
wall49 = new Wall(840,540,150,10);
wall50 = new Wall(800,570,150,10);
wall51 = new Wall(920,610,10,150);
wall52 = new Wall(870,640,10,150);
wall53 = new Wall(990,680,150,10);
wall54 = new Wall(940,710,150,10);
wall55 = new Wall(1020,730,10,50);
wall56 = new Wall(1060,715,10,80);

//left up maze
wall57 = new Wall(600,260,90,10);
wall58 = new Wall(575,300,140,10);
wall59 = new Wall(500,240,10,130);
wall60 = new Wall(550,200,10,130);
wall61 = new Wall(430,180,130,10);
wall62 = new Wall(480,140,130,10);
wall63 = new Wall(360,135,10,100);
wall64 = new Wall(410,95,10,100);
wall65 = new Wall(290,80,150,10);
wall66 = new Wall(340,40,150,10);
wall67 = new Wall(220,40,10,90);
wall68 = new Wall(260,15,10,60);

Joker = createSprite(1250,80,10,10);
Joker.addImage("joker",Joker_img);
Joker.scale = 0.1;

HarleyQuinn = createSprite(250,200,10,10);
HarleyQuinn.addImage("hq",HarleyQuinn_img);
HarleyQuinn.scale = 0.1;

DeadShot = createSprite(515,460,10,10);
DeadShot.addImage("deadshot", DeadShot_img);
DeadShot.scale = 0.1;

SpiderMan = createSprite(100,710,20,20);
SpiderMan.addImage("spiderman", SpiderMan_img);
SpiderMan.scale = 0.1;

Thanos = createSprite(700,330,30,30);
Thanos.addImage("thanos", Thanos_img);
Thanos.scale = 0.2;

/*for(var a = 75; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,75));
}

for(var a = 50; a <=width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,175));
}

for(var a = 75; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,275));
}

for(var a = 50; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,375));
}*/

}                                                                                                                                          

function draw(){
  
  background(0);  

  text(mouseX + "," + mouseY, mouseX, mouseY);

  Engine.update(engine);

  if(keyDown("UP_ARROW")){
    SpiderMan.y = SpiderMan.y - 5;
  }

  if(keyDown("DOWN_ARROW")){
    SpiderMan.y = SpiderMan.y + 5;
  }

  if(keyDown("RIGHT_ARROW")){
    SpiderMan.x = SpiderMan.x + 5;
  }

  if(keyDown("LEFT_ARROW")){
    SpiderMan.x = SpiderMan.x - 5;
  }

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();

  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();

  wall37.display();
  wall38.display();
  wall39.display();
  wall40.display();
  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();
  wall46.display();

  wall47.display();
  wall48.display();
  wall49.display();
  wall50.display();
  wall51.display();
  wall52.display();
  wall53.display();
  wall54.display();
  wall55.display();
  wall56.display();

  wall57.display();
  wall58.display();
  wall59.display();
  wall60.display();
  wall61.display();
  wall62.display();
  wall63.display();
  wall64.display();
  wall65.display();
  wall66.display();
  wall67.display();
  wall68.display();

  /*for(var a = 0; a < invisible_obstacle.length; a++){
    invisible_obstacle[a].display();
  }*/


  drawSprites();

}