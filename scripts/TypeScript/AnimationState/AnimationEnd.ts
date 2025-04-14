
export interface IAnimationEnd {
    setAnimationOver(): void;
}

export class AnimationEndClass implements IAnimationEnd {
    private elem: Element[];

    constructor(elem: Element[]) {
        this.elem = elem;
    }

    setAnimationOver(): void {
        this.elem.forEach(animationElem => {
            animationElem.addEventListener("animationend", () => {
                animationElem.setAttribute("data-animation", "ready");
            });
        });
    }
}