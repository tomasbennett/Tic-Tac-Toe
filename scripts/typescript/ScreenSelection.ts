interface IScreen {
    render(): void;

    addEventListeners(): void;

    removeElems(): void;

    removeEventListeners(): void;
}

abstract class ScreenFactory {
    protected static cache: Map<string, IScreen> = new Map();

    creationLogic(screenManager: ScreenStateManager): IScreen {

        const screenName: string = this.constructor.name;
        let screen: IScreen | undefined = ScreenFactory.cache.get(screenName);

        if (!screen) {
            screen = this.instantiate(screenManager);
            ScreenFactory.cache.set(screenName, screen);
        }
        
        screen.render();
        screen.addEventListeners();
        
        screenManager.setScreen(screen);

        return screen;
    }

    abstract instantiate(screenManager: ScreenStateManager): IScreen;
}

class StartScreenFactory extends ScreenFactory {
    instantiate(screenManager: ScreenStateManager): IScreen {
        return new StartScreen(screenManager);
    }
}

class GameScreenFactory extends ScreenFactory {
    instantiate(screenManager: ScreenStateManager): IScreen {
        return new GameScreen(screenManager);
    }
}

class TwoPlayerTeamScreenFactory extends ScreenFactory {
    instantiate(screenManager: ScreenStateManager): IScreen {
        return new TwoPlayerTeamScreen(screenManager);
    }
}

















class ScreenStateManager {
    private screen!: IScreen;

    render(): void {
        this.screen.render();
    }
    addEventListeners(): void {
        this.screen.addEventListeners();
    }
    removeElems(): void {
        this.screen.removeElems();
    }
    removeEventListeners(): void {
        this.screen.removeEventListeners();
    }

    getScreen(): IScreen {
        return this.screen;
    }

    setScreen(newScreenState: IScreen): void {
        this.screen = newScreenState;
    }

}


class StartScreen implements IScreen {
    private screenManager: ScreenStateManager;

    private onePlayer: HTMLDivElement;
    private twoPlayer: HTMLDivElement;

    private onePlayerClickHandler: () => void;
    private twoPlayerClickHandler: () => void;

    constructor(screenManager: ScreenStateManager) {
        this.screenManager = screenManager;

        this.onePlayer = document.createElement("div");
        this.twoPlayer = document.createElement("div");

        this.onePlayer.classList.add("start", "screen", "poneselect");
        this.twoPlayer.classList.add("start", "screen", "ptwoselect");
        
        this.onePlayer.textContent = "This is the start screen, click to go to Game Screen";
        this.twoPlayer.textContent = "This is the start screen, click to go to Player Two Select Screen";

        this.onePlayerClickHandler = () => {
            const gameFactory: ScreenFactory = new GameScreenFactory();
            const gameScreen: IScreen = gameFactory.creationLogic(this.screenManager);
            this.removeEventListeners();
            this.removeElems();
        };
        this.twoPlayerClickHandler = () => {
            const twoPlayerFactory: ScreenFactory = new TwoPlayerTeamScreenFactory();
            const twoPlayerScreen: IScreen = twoPlayerFactory.creationLogic(this.screenManager);
            this.removeEventListeners();
            this.removeElems();
        };
    }

    render(): void {
        document.body.appendChild(this.onePlayer);
        document.body.appendChild(this.twoPlayer);
    }
    addEventListeners(): void {
        this.onePlayer.addEventListener("click", this.onePlayerClickHandler);
        this.twoPlayer.addEventListener("click", this.twoPlayerClickHandler);
    }
    removeEventListeners(): void {
        this.onePlayer.removeEventListener("click", this.onePlayerClickHandler);
        this.twoPlayer.removeEventListener("click", this.twoPlayerClickHandler);
    }
    removeElems(): void {
        this.onePlayer.remove();
        this.twoPlayer.remove();
    }
}

class GameScreen implements IScreen {
    private screenManager: ScreenStateManager;

    private game: HTMLDivElement;

    constructor(screenManager: ScreenStateManager) {
        this.screenManager = screenManager;

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
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }

}

class TwoPlayerTeamScreen implements IScreen {
    private screenManager: ScreenStateManager;

    private xSelector: HTMLDivElement;
    private oSelector: HTMLDivElement;

    constructor(screenManager: ScreenStateManager) {
        this.screenManager = screenManager;

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
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeElems(): void {
        throw new Error("Method not implemented.");
    }

}

const screenManager: ScreenStateManager = new ScreenStateManager();

const startScreenFactory: ScreenFactory = new StartScreenFactory();
const startScreen = startScreenFactory.creationLogic(screenManager);


















/*

class GameOverScreen implements IScreen {
    private screenManager: ScreenStateManager;

    constructor(screenManager: ScreenStateManager) {
        this.screenManager = screenManager;
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
    private screenManager: ScreenStateManager;

    constructor(screenManager: ScreenStateManager) {
        this.screenManager = screenManager;
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

