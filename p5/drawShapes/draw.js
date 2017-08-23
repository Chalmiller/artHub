function setup() {

    createCanvas(720, 360);
    background(0);
    noStroke();

    var gridSize = 35;

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(255);
            rect(x - 1, y - 1, 3, 3);
            stroke(255, 50);
            line(x, y, width / 2, height / 2);
        }
    }

}

function draw() {
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