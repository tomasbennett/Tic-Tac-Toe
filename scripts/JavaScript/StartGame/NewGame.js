import { StartGame } from "./StartGame.js";
export class DialogBox {
    constructor() {
        this.dialogBox = document.getElementById("decision-dialog-box");
        this.currentGame = new StartGame(this);
        this.winnerTitle = document.getElementById("winning-title");
        this.winnerDesc = document.getElementById("winning-description");
        this.newGameButton = document.getElementById("restart-game");
    }
    initialiseStartGame() {
        this.currentGame.setViewBox();
        this.currentGame.setAnimationEnd();
        this.currentGame.addEventListeners();
    }
    openDialogBox(winner) {
        this.winnerTitle.textContent = winner;
        this.winnerDesc.textContent = winner;
        this.dialogBox.showModal();
    }
    addEventListeners() {
        this.newGameButton.addEventListener("click", this.restartGame.bind(this));
    }
    restartGame() {
        this.dialogBox.close();
        this.currentGame.resetAttributeValues();
        this.currentGame.removeEventListeners();
        this.currentGame = new StartGame(this);
        this.currentGame.addEventListeners();
    }
}
//# sourceMappingURL=NewGame.js.map