import { IPlayingPiece, PlayingPieceCross, PlayingPieceCircle } from "../GamePlayComponents/PlayingPieces.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";
import { WinCondition } from "../GameIntake/GameRules.js";
import { DialogBox } from "../StartGame/NewGame.js";


export interface IPlayerTurnState {
    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number, dialogBox: DialogBox): void;

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

    makeMove(elem: HTMLElement, winCondition: WinCondition, dialogBox: DialogBox): void {
        const conditional: InteractCondtional = new InteractCondtional(elem);
        if(conditional.checkBackdrop()) {


            const interactiveGroup: HTMLElement = elem.parentElement!;


            const parentArr: Element[] = Array.from(interactiveGroup.parentElement?.children || []);
            const index: number = parentArr.indexOf(interactiveGroup) + 1;

            

            this._playerTurnState.makeMove(elem, winCondition, index, dialogBox);
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

        const title: HTMLElement = document.getElementById("game-piece-heading")!;
        title.setAttribute("data-turn-state", "x-piece");
        title.textContent = "X";
    }
    
    hoverChoiceDisplay(elem: HTMLElement): void {
        this.playingPiece.setChosenPiece(elem);

        this.playingPiece.partialVisibility();
    }   

    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number, dialogBox: DialogBox): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        
        if (winCondition.winConditionCheck(this, indexElem)) {
            dialogBox.winnerSelect("X")
            dialogBox.openDialogBox();
            return;
        } else if (winCondition.drawCondition()) {
            dialogBox.drawSelect();
            dialogBox.openDialogBox();
            return;
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

        const title: HTMLElement = document.getElementById("game-piece-heading")!;
        title.setAttribute("data-turn-state", "o-piece");
        title.textContent = "O";
    }
    
    hoverChoiceDisplay(elem: HTMLElement): void {
        this.playingPiece.setChosenPiece(elem);

        this.playingPiece.partialVisibility();
    }

    makeMove(elem: HTMLElement, winCondition: WinCondition, indexElem: number, dialogBox: DialogBox): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        if (winCondition.winConditionCheck(this, indexElem)) {
            dialogBox.winnerSelect("O")
            dialogBox.openDialogBox();
            return;
        }

        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }

    hoverOutDisplay(): void {
        this.playingPiece.notVisible();
    }
}