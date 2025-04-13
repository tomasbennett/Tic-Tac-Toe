export class AnimationEndClass {
    constructor(className) {
        this.elem = document.getElementsByClassName(className);
    }
    setAnimationOver() {
        Array.from(this.elem).forEach(animationElem => {
            animationElem.addEventListener("animationend", () => {
                animationElem.setAttribute("data-animation", "ready");
            });
        });
    }
}
//# sourceMappingURL=AnimationEnd.js.map