import { StartGame } from "./StartGame.js";

export class DialogBox {
    private dialogBox: HTMLDialogElement;
    private currentGame: StartGame;

    private winnerTitle: HTMLElement;
    private winnerTitleContainer: HTMLElement;
    private winnerDesc: HTMLElement;
    private winnerDescContainer: HTMLElement;

    private imgContainer: HTMLElement;
    private drawOutcome: HTMLElement;

    private newGameButton: HTMLButtonElement;



    constructor() {
        this.dialogBox = document.getElementById("decision-dialog-box")! as HTMLDialogElement;
        
        this.currentGame = new StartGame(this);

        this.winnerTitle = document.getElementById("winning-title")!;
        this.winnerTitleContainer = document.getElementById("winning-title-container")!;
        this.winnerDesc = document.getElementById("winning-description")!;
        this.winnerDescContainer = document.getElementById("winning-desc-container")!;

        this.imgContainer = document.getElementById("image-container")!;

        this.drawOutcome = document.getElementById("draw-outcome")!;

        this.newGameButton = document.getElementById("restart-game")! as HTMLButtonElement;
    }

    initialiseStartGame(): void {
        this.currentGame.setViewBox();
        this.currentGame.setAnimationEnd();
        this.currentGame.addEventListeners();
    }


    openDialogBox(): void {
        this.dialogBox.showModal();

    }

    winnerSelect(winner: string): void {
        this.winnerTitleContainer.style.display = "block";
        this.winnerDescContainer.style.display = "block";
        this.imgContainer.style.display = "block";

        this.drawOutcome.style.display = "none";

        this.winnerTitle.textContent = winner;
        this.winnerDesc.textContent = winner;


    }

    drawSelect(): void {
        this.winnerTitleContainer.style.display = "none";
        this.winnerDescContainer.style.display = "none";
        this.imgContainer.style.display = "none";

        this.drawOutcome.style.display = "block";
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