
export interface IAnimationEnd {
    setAnimationOver(): void;
}

export class AnimationEndClass implements IAnimationEnd {
    private elem: HTMLCollectionOf<Element>;

    constructor(className: string) {
        this.elem = document.getElementsByClassName(className);
    }

    setAnimationOver(): void {
        Array.from(this.elem).forEach(animationElem => {
            animationElem.addEventListener("animationend", () => {
                animationElem.setAttribute("data-animation", "ready");
            });
        });
    }
}