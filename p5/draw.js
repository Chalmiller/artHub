function setup() {
    createCanvas(600, 600);
}

function draw() {
    if (mouseIsPressed) {
        //replace fill with coloronclick argument
        fill(0);
    } else {
        //replace with color argument
        fill(255);
    }
    rect(mouseX, mouseY, 55, 55);
    rect(100, 200, 55, 55);
    ellipse(mouseX, mouseY, 80, 80);
    rectMode(CORNER); // Default rectMode is CORNER
    fill(255); // Set fill to white
    rect(25, 25, 50, 50); // Draw white rect using CORNER mode
    triangle(mouseX, mouseY, mouseX, mouseY);
}