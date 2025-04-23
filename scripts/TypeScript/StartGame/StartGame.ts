import { ViewBox } from "../ViewBox/ViewBox.js";
import { AnimationEndClass, IAnimationEnd } from "../AnimationState/AnimationEnd.js";
import { PlayerTurnStateManager, IPlayerTurnState } from "../PlayerTurnState/PlayerTurnState.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";
import { WinCondition } from "../GameIntake/GameRules.js";
import { DialogBox } from "./NewGame.js";


export class StartGame {
    private hoverBackdrops: Element[];

    private viewBox: ViewBox;
    private animationEnd: IAnimationEnd;

    private playerStateManager: PlayerTurnStateManager;

    private winCondition: WinCondition;

    private dialogBox: DialogBox;


    private clickFunction: (e: Event) => void;
    private mouseEnterFunction: (e: Event) => void;
    private mouseLeaveFunction: (e: Event) => void;

    constructor(dialogBox: DialogBox) {
        this.hoverBackdrops = Array.from(document.getElementsByClassName("hover-backdrop")!);

        this.viewBox = new ViewBox("main-board-svg", "top-layer-group");
        this.animationEnd = new AnimationEndClass(this.hoverBackdrops);

        this.playerStateManager = new PlayerTurnStateManager();

        this.winCondition = new WinCondition(3, 3, 3);


        this.dialogBox = dialogBox;


        this.clickFunction = (e: Event) => {
            const targetEl = e.target as HTMLElement;
            this.playerStateManager.makeMove(targetEl, this.winCondition, this.dialogBox);
        }

        this.mouseEnterFunction = (e: Event) => {
            const targetEl = e.target as HTMLElement;
            this.playerStateManager.hoverChoiceDisplay(targetEl);
        }

        this.mouseLeaveFunction = (e: Event) => {
            const targetEl = e.target as HTMLElement;
            this.playerStateManager.hoverOutDisplay(targetEl);
        }


    }

    setViewBox(): void {
        this.viewBox.setSVGViewBox();
    }

    setAnimationEnd(): void {
        this.animationEnd.setAnimationOver();
    }

    resetAttributeValues(): void {
        this.hoverBackdrops.forEach(elem => {
            elem.classList.remove("clicked");
            elem.classList.remove("clicked");
            
            
            const redCross: HTMLElement = elem.parentElement?.querySelector(".red-cross")!;
            const blueCircle: HTMLElement = elem.parentElement?.querySelector(".blue-circle")!;
        
            redCross.setAttribute("data-visibility", "not-visible");
            blueCircle.setAttribute("data-visibility", "not-visible");
        });
    }

    removeEventListeners(): void {
        this.hoverBackdrops.forEach(elem => {

            elem.removeEventListener("click", this.clickFunction);

            elem.removeEventListener("mouseenter", this.mouseEnterFunction);

            elem.removeEventListener("mouseleave", this.mouseLeaveFunction);
        
        });
    }

    addEventListeners(): void {
        this.hoverBackdrops.forEach(elem => {

            elem.addEventListener("click", this.clickFunction);

            elem.addEventListener("mouseenter", this.mouseEnterFunction);

            elem.addEventListener("mouseleave", this.mouseLeaveFunction);
        });
    }
}