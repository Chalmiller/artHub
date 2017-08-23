var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("bomb_dot_com.jpg");
}

function setup() {
  createCanvas(670, 440);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 100);
  ellipse(x, y, pointillize, pointillize);
}