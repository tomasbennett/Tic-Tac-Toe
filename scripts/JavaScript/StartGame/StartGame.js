import { ViewBox } from "../ViewBox/ViewBox.js";
import { AnimationEndClass } from "../AnimationState/AnimationEnd.js";
import { PlayerTurnStateManager } from "../PlayerTurnState/PlayerTurnState.js";
import { WinCondition } from "../GameIntake/GameRules.js";
export class StartGame {
    constructor(dialogBox) {
        this.hoverBackdrops = Array.from(document.getElementsByClassName("hover-backdrop"));
        this.viewBox = new ViewBox("main-board-svg", "top-layer-group");
        this.animationEnd = new AnimationEndClass(this.hoverBackdrops);
        this.playerStateManager = new PlayerTurnStateManager();
        this.winCondition = new WinCondition(3, 3, 3);
        this.dialogBox = dialogBox;
        this.clickFunction = (e) => {
            const targetEl = e.target;
            this.playerStateManager.makeMove(targetEl, this.winCondition, this.dialogBox);
        };
        this.mouseEnterFunction = (e) => {
            const targetEl = e.target;
            this.playerStateManager.hoverChoiceDisplay(targetEl);
        };
        this.mouseLeaveFunction = (e) => {
            const targetEl = e.target;
            this.playerStateManager.hoverOutDisplay(targetEl);
        };
    }
    setViewBox() {
        this.viewBox.setSVGViewBox();
    }
    setAnimationEnd() {
        this.animationEnd.setAnimationOver();
    }
    resetAttributeValues() {
        this.hoverBackdrops.forEach(elem => {
            var _a, _b;
            elem.classList.remove("clicked");
            elem.classList.remove("clicked");
            const redCross = (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".red-cross");
            const blueCircle = (_b = elem.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector(".blue-circle");
            redCross.setAttribute("data-visibility", "not-visible");
            blueCircle.setAttribute("data-visibility", "not-visible");
        });
    }
    removeEventListeners() {
        this.hoverBackdrops.forEach(elem => {
            elem.removeEventListener("click", this.clickFunction);
            elem.removeEventListener("mouseenter", this.mouseEnterFunction);
            elem.removeEventListener("mouseleave", this.mouseLeaveFunction);
        });
    }
    addEventListeners() {
        this.hoverBackdrops.forEach(elem => {
            elem.addEventListener("click", this.clickFunction);
            elem.addEventListener("mouseenter", this.mouseEnterFunction);
            elem.addEventListener("mouseleave", this.mouseLeaveFunction);
        });
    }
}
//# sourceMappingURL=StartGame.js.map