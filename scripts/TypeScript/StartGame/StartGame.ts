import { ViewBox } from "../ViewBox/ViewBox.js";
import { AnimationEndClass, IAnimationEnd } from "../AnimationState/AnimationEnd.js";
import { PlayerTurnStateManager, IPlayerTurnState } from "../PlayerTurnState/PlayerTurnState.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";
import { WinCondition } from "../GameIntake/GameRules.js";


export class StartGame {
    private hoverBackdrops: Element[];

    private viewBox: ViewBox;
    private animationEnd: IAnimationEnd;

    private playerStateManager: PlayerTurnStateManager;

    private winCondition: WinCondition;

    constructor() {
        this.hoverBackdrops = Array.from(document.getElementsByClassName("hover-backdrop")!);

        this.viewBox = new ViewBox("main-board-svg", "top-layer-group");
        this.animationEnd = new AnimationEndClass(this.hoverBackdrops);

        this.playerStateManager = new PlayerTurnStateManager();

        this.winCondition = new WinCondition(3, 3, 3);
    }

    setViewBox(): void {
        this.viewBox.setSVGViewBox();
    }

    setAnimationEnd(): void {
        this.animationEnd.setAnimationOver();
    }

    addEventListeners(): void {
        this.hoverBackdrops.forEach(elem => {

            elem.addEventListener("click", (e) => {
                const targetEl = e.target as HTMLElement;
                this.playerStateManager.makeMove(targetEl, this.winCondition);
            });

            elem.addEventListener("mouseenter", (e) => {
                const targetEl = e.target as HTMLElement;
                this.playerStateManager.hoverChoiceDisplay(targetEl);
            });

            elem.addEventListener("mouseleave", (e) => {
                const targetEl = e.target as HTMLElement;
                this.playerStateManager.hoverOutDisplay(targetEl);
            });
        
        });
    }
}