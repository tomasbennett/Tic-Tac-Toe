interface IScreen {
    render(): void;

    addEventListeners(): void;

    changePage(newPage: ScreenFactory): void;

    removeElems(): void;

    removeEventListeners(): void;
}

abstract class ScreenFactory {
    protected static cache: Map<string, IScreen> = new Map();

    creationLogic(): void {

        const screenName: string = this.constructor.name;
        let screen: IScreen | undefined = ScreenFactory.cache.get(screenName);

        if (!screen) {
            screen = this.instantiate();
            ScreenFactory.cache.set(screenName, screen);
        }
        
        screen.render();
        screen.addEventListeners();
    }

    abstract instantiate(): IScreen;
}

class StartScreenFactory extends ScreenFactory {
    instantiate(): IScreen {
        return new StartScreen();
    }
}

class GameScreenFactory extends ScreenFactory {
    instantiate(): IScreen {
        return new GameScreen();
    }
}

class TwoPlayerTeamScreenFactory extends ScreenFactory {
    instantiate(): IScreen {
        return new TwoPlayerTeamScreen();
    }
}


















class StartScreen implements IScreen {

    private onePlayer: HTMLDivElement;
    private twoPlayer: HTMLDivElement;

    constructor() {
        this.onePlayer = document.createElement("div");
        this.twoPlayer = document.createElement("div");

        this.onePlayer.classList.add("start", "screen", "poneselect");
        this.twoPlayer.classList.add("start", "screen", "ptwoselect");
        
        this.onePlayer.textContent = "This is the start screen, click to go to Game Screen";
        this.twoPlayer.textContent = "This is the start screen, click to go to Player Two Select Screen";
    }
    render(): void {
        document.body.appendChild(this.onePlayer);
        document.body.appendChild(this.twoPlayer);
    }
    addEventListeners(): void {
        this.onePlayer.addEventListener("click", this.changePage.bind(this, new GameScreenFactory()));
        this.twoPlayer.addEventListener("click", this.changePage.bind(this, new TwoPlayerTeamScreenFactory()));
    }
    changePage(newPage: ScreenFactory): void {
        this.removeEventListeners();
        this.removeElems();
        newPage.creationLogic();
    }
    removeEventListeners(): void {
        this.onePlayer.removeEventListener("click", this.changePage.bind(this, new GameScreenFactory()));
        this.twoPlayer.removeEventListener("click", this.changePage.bind(this, new TwoPlayerTeamScreenFactory()));
    }
    removeElems(): void {
        this.onePlayer.remove();
        this.twoPlayer.remove();
    }
    
}

class GameScreen implements IScreen {

    private game: HTMLDivElement;

    constructor() {
        this.game = document.createElement("div");
        this.game.classList.add("screen", "game");
        this.game.textContent = "This is the game screen";
    }
    render(): void {
        document.body.appendChild(this.game);
    }
    addEventListeners(): void {
        console.log("game screen finally...");
    }
    changePage(newPage: ScreenFactory): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }

}

class TwoPlayerTeamScreen implements IScreen {

    private xSelector: HTMLDivElement;
    private oSelector: HTMLDivElement;

    constructor() {
        this.xSelector = document.createElement("div");
        this.xSelector.classList.add("player-two-select", "screen", "x");
        this.xSelector.textContent = "Click for X";

        this.oSelector = document.createElement("div");
        this.oSelector.classList.add("player-two-select", "screen", "o");
        this.oSelector.textContent = "Click for O";
    }
    render(): void {
        document.body.appendChild(this.xSelector);
        document.body.appendChild(this.oSelector);
    }
    addEventListeners(): void {
        console.log("Two Player Selected...");
    }
    changePage(newPage: ScreenFactory): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }

}


const startScreenFactory: ScreenFactory = new StartScreenFactory();
startScreenFactory.creationLogic();


















/*

class GameOverScreen implements IScreen {
    private ;

    constructor() {
        this. = ;
    }

    render(): void {
        throw new Error("Method not implemented.");
    }
    addEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }

}

class PauseScreen implements IScreen {
    private ;

    constructor() {
        this. = ;
    }

    render(): void {
        throw new Error("Method not implemented.");
    }
    addEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }

}

*/

