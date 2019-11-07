import Comet from './Comet';

let allComets: Array<Comet> = [];

function createElement() {
    const count = 100;
    for (let i = 0; i < count; i++) {
        let comet = new Comet({
            position: {
                x: Math.random() * innerWidth,
                y: -200
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
    allComets.forEach(comet => comet.updateElement());
}

createElement();
loop();

document.getElementById("background")!.addEventListener('click', (event) => {
    radiusShake(event);


});

function radiusShake(event: MouseEvent) {
    const radius = 30;
    allComets.forEach(comet => {
        const cometPosition = comet.getPosition();
        const elementWidth = comet.getElement().clientWidth;
        const elementHeight = comet.getElement().clientHeight;
        if ((cometPosition.x <= event.x + radius && cometPosition.x >= event.x - radius - elementWidth) &&
            (cometPosition.y <= event.y + radius && cometPosition.y >= event.y - radius - elementHeight)) {
            comet.click();
        }
    });
}