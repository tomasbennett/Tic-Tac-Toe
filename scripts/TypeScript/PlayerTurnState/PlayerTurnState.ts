import { IPlayingPiece, PlayingPieceCross, PlayingPieceCircle } from "../GamePlayComponents/PlayingPieces.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";

export interface IPlayerTurnState {
    makeMove(elem: HTMLElement): void;

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

    makeMove(elem: HTMLElement): void {
        const conditional: InteractCondtional = new InteractCondtional(elem);
        if(conditional.checkBackdrop()) {
            this._playerTurnState.makeMove(elem);
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



class PlayerXTurn implements IPlayerTurnState {
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

    makeMove(elem: HTMLElement): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }

    hoverOutDisplay(): void {
        this.playingPiece.notVisible();
    }

}


class PlayerOTurn implements IPlayerTurnState {
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

    makeMove(elem: HTMLElement): void {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");

        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }

    hoverOutDisplay(): void {
        this.playingPiece.notVisible();
    }
}