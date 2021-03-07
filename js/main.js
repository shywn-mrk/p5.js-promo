function setup() {
    createCanvas(700, 700)
}

function draw() {
    background(123, 25, 83)

    if (mouseIsPressed) {
        fill(255)
    } else {
        fill(0)
    }

    ellipse(mouseX, mouseY, 50, 50)
}
