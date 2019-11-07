interface CurrentPosition {
    x: number;
    y: number;
}

interface CurrentVelocity {
    x: number;
    y: number;
}

export default class Comet {
    protected element: HTMLDivElement;
    protected mPosition: CurrentPosition;
    protected mVelocity: CurrentVelocity;

    constructor({ position, velocity }: { position: CurrentPosition, velocity: CurrentVelocity }) {
        this.mPosition = position;
        this.mVelocity = velocity;
        this.element = document.createElement('div');
        this.element.className = 'comet-wrapper';
        this.element.innerHTML = `<img class="comet" src="comet.svg" alt="comet" />`;
    }

    public updatePosition() {
        if (this.mPosition.y >= (innerHeight * 1.4)) {                      // Comet is below the window bottom
            this.mPosition.y = 0;
            this.mPosition.x += this.mVelocity.x;
        } else if(this.mPosition.x > innerWidth) {                          // Comet is on the right window side
            this.mPosition.y = this.mPosition.y + this.mVelocity.y * 2;
            this.mPosition.x = 0;
        } else if(this.mPosition.x < -50) {                                 // Comet is below the left window side
            this.mPosition.y = this.mPosition.y + this.mVelocity.y * 2;
            this.mPosition.x = innerWidth;
        } else {                                                            // Comet falls normally
            this.mPosition = {
                x: this.mPosition.x + this.mVelocity.x,
                y: this.mPosition.y + this.mVelocity.y * 2
            }
        }
    }

    public drawElement() {
        this.element.style.top = `${this.mPosition.y}px`;
        this.element.style.left = `${this.mPosition.x}px`;
        document.body.appendChild(this.element);
    }
}
