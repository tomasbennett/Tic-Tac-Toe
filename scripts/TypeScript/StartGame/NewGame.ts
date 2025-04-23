import { StartGame } from "./StartGame.js";

export class DialogBox {
    private dialogBox: HTMLDialogElement;
    private currentGame: StartGame;
    private winnerTitle: HTMLElement;
    private winnerDesc: HTMLElement;
    private newGameButton: HTMLButtonElement;



    constructor() {
        this.dialogBox = document.getElementById("decision-dialog-box")! as HTMLDialogElement;
        
        this.currentGame = new StartGame(this);

        this.winnerTitle = document.getElementById("winning-title")!;
        this.winnerDesc = document.getElementById("winning-description")!;

        this.newGameButton = document.getElementById("restart-game")! as HTMLButtonElement;
    }

    initialiseStartGame(): void {
        this.currentGame.setViewBox();
        this.currentGame.setAnimationEnd();
        this.currentGame.addEventListeners();
    }


    openDialogBox(winner: string): void {
        this.winnerTitle.textContent = winner;
        this.winnerDesc.textContent = winner;

        this.dialogBox.showModal();

    }
    
    addEventListeners(): void {
        this.newGameButton.addEventListener("click", this.restartGame.bind(this));

    }

    restartGame(): void {
        this.dialogBox.close();

        this.currentGame.resetAttributeValues();
        this.currentGame.removeEventListeners();

        this.currentGame = new StartGame(this);
        this.currentGame.addEventListeners();

    }


}