export class AnimationEndClass {
    constructor(elem) {
        this.elem = elem;
    }
    setAnimationOver() {
        this.elem.forEach(animationElem => {
            animationElem.addEventListener("animationend", () => {
                animationElem.setAttribute("data-animation", "ready");
            });
        });
    }
}
//# sourceMappingURL=AnimationEnd.js.map