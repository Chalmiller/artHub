var bg;
var y = 0;

function setup() {
    // The background image must be the same size as the parameters
    // into the createCanvas() method. In this program, the size of
    // the image is 720x400 pixels.
    bg = loadImage("bomb_dot_com.jpg");
    createCanvas(670, 440);
}

function draw() {
    background(bg);

    stroke(226, 204, 0);
    line(0, y, width, y);

    y++;
    if (y > height) {
        y = 0;
    }
    if (mouseIsPressed) {
        //replace fill with coloronclick argument
        fill(0);
    } else {
        //replace with color argument
        fill(255);
    }
    ellipse(mouseX, mouseY, 10, 10);
    fill(255); // Set fill to white
}