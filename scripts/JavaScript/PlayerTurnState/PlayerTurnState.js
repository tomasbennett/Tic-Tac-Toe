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
    makeMove(elem, winCondition, dialogBox) {
        var _a;
        const conditional = new InteractCondtional(elem);
        if (conditional.checkBackdrop()) {
            const interactiveGroup = elem.parentElement;
            const parentArr = Array.from(((_a = interactiveGroup.parentElement) === null || _a === void 0 ? void 0 : _a.children) || []);
            const index = parentArr.indexOf(interactiveGroup) + 1;
            this._playerTurnState.makeMove(elem, winCondition, index, dialogBox);
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
export class PlayerXTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
        this.playingPiece = new PlayingPieceCross();
        const title = document.getElementById("game-piece-heading");
        title.setAttribute("data-turn-state", "x-piece");
        title.textContent = "X";
    }
    hoverChoiceDisplay(elem) {
        this.playingPiece.setChosenPiece(elem);
        this.playingPiece.partialVisibility();
    }
    makeMove(elem, winCondition, indexElem, dialogBox) {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");
        if (winCondition.winConditionCheck(this, indexElem)) {
            dialogBox.winnerSelect("X");
            dialogBox.openDialogBox();
            return;
        }
        else if (winCondition.drawCondition()) {
            dialogBox.drawSelect();
            dialogBox.openDialogBox();
            return;
        }
        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }
    hoverOutDisplay() {
        this.playingPiece.notVisible();
    }
}
export class PlayerOTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
        this.playingPiece = new PlayingPieceCircle();
        const title = document.getElementById("game-piece-heading");
        title.setAttribute("data-turn-state", "o-piece");
        title.textContent = "O";
    }
    hoverChoiceDisplay(elem) {
        this.playingPiece.setChosenPiece(elem);
        this.playingPiece.partialVisibility();
    }
    makeMove(elem, winCondition, indexElem, dialogBox) {
        this.playingPiece.fullVisibility();
        elem.classList.add("clicked");
        if (winCondition.winConditionCheck(this, indexElem)) {
            dialogBox.winnerSelect("O");
            dialogBox.openDialogBox();
            return;
        }
        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }
    hoverOutDisplay() {
        this.playingPiece.notVisible();
    }
}
//# sourceMappingURL=PlayerTurnState.js.map