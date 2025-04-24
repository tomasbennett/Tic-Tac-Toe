import { StartGame } from "./StartGame.js";
export class DialogBox {
    constructor() {
        this.dialogBox = document.getElementById("decision-dialog-box");
        this.currentGame = new StartGame(this);
        this.winnerTitle = document.getElementById("winning-title");
        this.winnerTitleContainer = document.getElementById("winning-title-container");
        this.winnerDesc = document.getElementById("winning-description");
        this.winnerDescContainer = document.getElementById("winning-desc-container");
        this.imgContainer = document.getElementById("image-container");
        this.drawOutcome = document.getElementById("draw-outcome");
        this.newGameButton = document.getElementById("restart-game");
    }
    initialiseStartGame() {
        this.currentGame.setViewBox();
        this.currentGame.setAnimationEnd();
        this.currentGame.addEventListeners();
    }
    openDialogBox() {
        this.dialogBox.showModal();
    }
    winnerSelect(winner) {
        this.winnerTitleContainer.style.display = "block";
        this.winnerDescContainer.style.display = "block";
        this.imgContainer.style.display = "block";
        this.drawOutcome.style.display = "none";
        this.winnerTitle.textContent = winner;
        this.winnerDesc.textContent = winner;
    }
    drawSelect() {
        this.winnerTitleContainer.style.display = "none";
        this.winnerDescContainer.style.display = "none";
        this.imgContainer.style.display = "none";
        this.drawOutcome.style.display = "block";
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