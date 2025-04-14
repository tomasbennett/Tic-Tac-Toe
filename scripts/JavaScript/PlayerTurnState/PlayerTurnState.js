import { PlayingPieceCross, PlayingPieceCircle } from "../GamePlayComponents/PlayingPieces.js";
import { InteractCondtional } from "../GamePlayConditional/GamePlayConditional.js";
export class PlayerTurnStateManager {
    constructor() {
        this._playerTurnState = new PlayerXTurn(this);
    }
    getPlayerTurnState() {
        return this._playerTurnState;
    }
    setPlayerTurnState(value) {
        this._playerTurnState = value;
    }
    makeMove(elem) {
        const conditional = new InteractCondtional(elem);
        if (conditional.checkBackdrop()) {
            this._playerTurnState.makeMove(elem);
        }
    }
    hoverChoiceDisplay(elem) {
        const conditional = new InteractCondtional(elem);
        if (conditional.checkBackdrop()) {
            this._playerTurnState.hoverChoiceDisplay(elem);
        }
    }
    hoverOutDisplay(elem) {
        const conditional = new InteractCondtional(elem);
        if (conditional.checkBackdrop()) {
            this._playerTurnState.hoverOutDisplay();
        }
    }
}
class PlayerXTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
        this.playingPiece = new PlayingPieceCross();
    }
    hoverChoiceDisplay(elem) {
        this.playingPiece.setChosenPiece(elem);
        this.playingPiece.partialVisibility();
    }
    makeMove(elem) {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");
        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }
    hoverOutDisplay() {
        this.playingPiece.notVisible();
    }
}
class PlayerOTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
        this.playingPiece = new PlayingPieceCircle();
    }
    hoverChoiceDisplay(elem) {
        this.playingPiece.setChosenPiece(elem);
        this.playingPiece.partialVisibility();
    }
    makeMove(elem) {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");
        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }
    hoverOutDisplay() {
        this.playingPiece.notVisible();
    }
}
//# sourceMappingURL=PlayerTurnState.js.map