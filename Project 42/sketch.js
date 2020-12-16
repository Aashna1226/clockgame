var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(480,400);

  //angle in degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  textSize(18);
  fill("white");
  text("Tick-Tock!", 20, 70);
  text("Tick-Tock!", 330, 70);
  text("Tick-Tock!", 20, 350);
  text("Tick-Tock!", 330, 350);


  translate(200,200);
  rotate(-90);

  //calculate time
  hr = hour();
  mn = minute();
  sc = second();

  //create ab iterative rotation
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr% 12, 0, 12, 0, 360);

  //draw seconds' hand
  push();
  rotate(scAngle);
  stroke(255, 0, 208);
  strokeWeight(6);
  line(0, 0, 100, 0);
  pop();

  //draw minutes' hand
  push();
  rotate(mnAngle);
  stroke(255, 157, 0);
  strokeWeight(6);
  line(0, 0, 75, 0);
  pop();

  //draw hours' hand
  push();
  rotate(hrAngle);
  stroke(0, 246, 255);
  strokeWeight(6);
  line(0, 0, 50, 0);
  pop();

  stroke(255, 0, 255);
  point(0,0);

  //draw the arcs
  strokeWeight(10);
  noFill();

  //Seconds
  stroke(255, 0, 208);
  arc(0,0,300,300,0,scAngle);

  //Minutes
  stroke(255, 157, 0);
  arc(0,0,280,280,0,mnAngle);

  //Hour
  stroke(20, 246, 255);
  arc(0,0,260,260,0,hrAngle);
}
