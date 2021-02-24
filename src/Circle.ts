import { CurrentPosition } from './general';

export default class Circle {
    protected element: HTMLDivElement;
    protected mPosition: CurrentPosition;

    constructor(position: CurrentPosition) {
        this.mPosition = position;

        this.element = document.createElement('div');
        this.element.className = 'circle';

        this.element.addEventListener('animationend', () => {
            this.removeElement();
        });
    }

    public getElement() {
        return this.element;
    }

    public drawElement() {
        this.element.style.top = `${this.mPosition.y}px`;
        this.element.style.left = `${this.mPosition.x}px`;
        document.getElementById("background")!.appendChild(this.element);
    }

    private removeElement() {
        document.getElementById('background')!.removeChild(this.element);
    }
}
