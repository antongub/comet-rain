import Comet from './Comet';

let allComets: Array<Comet> = [];

function createElement() {
    const count = 100;
    for (let i = 0; i < count; i++) {
        let comet = new Comet({
            position: {
                x: Math.random() * innerWidth,
                y: 0
            },
            velocity: {
                x: Math.random() < 0.5 ? -1 : 1,
                y: Math.random() * 5
            }
        });
        allComets.push(comet);
        comet.drawElement();
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

function update() {
    allComets.forEach(comet => comet.updatePosition());
}
function draw() {
    allComets.forEach(comet => comet.drawElement());
}

createElement();
loop();
