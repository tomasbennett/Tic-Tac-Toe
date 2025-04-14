import { ViewBox } from "../ViewBox/ViewBox.js";
import { AnimationEndClass } from "../AnimationState/AnimationEnd.js";
import { PlayerTurnStateManager } from "../PlayerTurnState/PlayerTurnState.js";
export class StartGame {
    constructor() {
        this.hoverBackdrops = Array.from(document.getElementsByClassName("hover-backdrop"));
        this.viewBox = new ViewBox("main-board-svg", "top-layer-group");
        this.animationEnd = new AnimationEndClass(this.hoverBackdrops);
        this.playerStateManager = new PlayerTurnStateManager();
    }
    setViewBox() {
        this.viewBox.setSVGViewBox();
    }
    setAnimationEnd() {
        this.animationEnd.setAnimationOver();
    }
    addEventListeners() {
        this.hoverBackdrops.forEach(elem => {
            elem.addEventListener("click", (e) => {
                const targetEl = e.target;
                this.playerStateManager.makeMove(targetEl);
            });
            elem.addEventListener("mouseenter", (e) => {
                const targetEl = e.target;
                this.playerStateManager.hoverChoiceDisplay(targetEl);
            });
            elem.addEventListener("mouseleave", (e) => {
                const targetEl = e.target;
                this.playerStateManager.hoverOutDisplay(targetEl);
            });
        });
    }
}
//# sourceMappingURL=StartGame.js.map