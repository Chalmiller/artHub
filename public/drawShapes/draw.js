
function setup() {

    createCanvas(720, 360);
    background(0);
    noStroke();

    var gridSize = 10;

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(204, 102, 100);
            rect(x - 1, y - 1, 3, 3);
            stroke(300, 50);
            line(x, y, width / 2, height / 2);
        }
    }

}

function draw() {
    if (mouseIsPressed) {
        //replace fill with coloronclick argument
        fill(204, 102, 100);
    } else {
        //replace with color argument
        fill(204, 102, 100);
    }
    ellipse(mouseX, mouseY, 10, 10);
    fill(0); // Set fill to white
}