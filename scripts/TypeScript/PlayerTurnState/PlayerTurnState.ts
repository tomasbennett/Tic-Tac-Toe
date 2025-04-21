import { IPlayingPiece, PlayingPieceCross, PlayingPieceCircle } from "../GamePlayComponents/PlayingPieces.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";
import { WinCondition } from "../GameIntake/GameRules.js";


export interface IPlayerTurnState {
    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number): void;

    hoverChoiceDisplay(elem: HTMLElement): void;

    hoverOutDisplay(): void;
}



export class PlayerTurnStateManager {
    private _playerTurnState: IPlayerTurnState;

    constructor() {
        this._playerTurnState = new PlayerXTurn(this);
    }

    getPlayerTurnState(): IPlayerTurnState {
        return this._playerTurnState;
    }
    
    setPlayerTurnState(value: IPlayerTurnState) {
        this._playerTurnState = value;
    }

    makeMove(elem: HTMLElement, winCondition: WinCondition): void {
        const conditional: InteractCondtional = new InteractCondtional(elem);
        if(conditional.checkBackdrop()) {


            const interactiveGroup: HTMLElement = elem.parentElement!;


            const parentArr: Element[] = Array.from(interactiveGroup.parentElement?.children || []);
            const index: number = parentArr.indexOf(interactiveGroup) + 1;



            this._playerTurnState.makeMove(elem, winCondition, index);
        }
    }

    hoverChoiceDisplay(elem: HTMLElement): void {
        const conditional: InteractCondtional = new InteractCondtional(elem);
        if(conditional.checkBackdrop()) {
            this._playerTurnState.hoverChoiceDisplay(elem);
        }
    }

    hoverOutDisplay(elem: HTMLElement): void {
        const conditional: InteractCondtional = new InteractCondtional(elem);
        if(conditional.checkBackdrop()) {
            this._playerTurnState.hoverOutDisplay();
        }
    }

}



export class PlayerXTurn implements IPlayerTurnState {
    private playerTurnManager: PlayerTurnStateManager;

    private playingPiece: IPlayingPiece;

    constructor(playerTurnManager: PlayerTurnStateManager) {
        this.playerTurnManager = playerTurnManager;

        this.playingPiece = new PlayingPieceCross();
    }
    
    hoverChoiceDisplay(elem: HTMLElement): void {
        this.playingPiece.setChosenPiece(elem);

        this.playingPiece.partialVisibility();
    }   

    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        
        if (winCondition.winConditionCheck(this, indexElem)) {
            console.log("Player X Wins congratulations!!!");
        }

        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }

    hoverOutDisplay(): void {
        this.playingPiece.notVisible();
    }

}


export class PlayerOTurn implements IPlayerTurnState {
    private playerTurnManager: PlayerTurnStateManager;

    private playingPiece: IPlayingPiece;

    constructor(playerTurnManager: PlayerTurnStateManager) {
        this.playerTurnManager = playerTurnManager;

        this.playingPiece = new PlayingPieceCircle();
    }
    
    hoverChoiceDisplay(elem: HTMLElement): void {
        this.playingPiece.setChosenPiece(elem);

        this.playingPiece.partialVisibility();
    }

    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        if (winCondition.winConditionCheck(this, indexElem)) {
            console.log("Player O Wins congratulations!!!");
        }

        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }

    hoverOutDisplay(): void {
        this.playingPiece.notVisible();
    }
}