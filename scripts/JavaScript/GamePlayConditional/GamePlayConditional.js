export class InteractCondtional {
    constructor(hoverBackdrop) {
        this.hoverBackdrop = hoverBackdrop;
    }
    checkBackdrop() {
        return !this.hoverBackdrop.classList.contains("clicked") &&
            this.hoverBackdrop.getAttribute("data-animation") == "ready";
    }
}
//# sourceMappingURL=GamePlayConditional.js.map