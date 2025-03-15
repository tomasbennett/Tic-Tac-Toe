var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScreenFactory = /** @class */ (function () {
    function ScreenFactory() {
    }
    ScreenFactory.prototype.creationLogic = function (screenManager) {
        var screenName = this.constructor.name;
        var screen = ScreenFactory.cache.get(screenName);
        if (!screen) {
            screen = this.instantiate(screenManager);
            ScreenFactory.cache.set(screenName, screen);
        }
        screen.render();
        screen.addEventListeners();
        return screen;
    };
    ScreenFactory.cache = new Map();
    return ScreenFactory;
}());
var StartScreenFactory = /** @class */ (function (_super) {
    __extends(StartScreenFactory, _super);
    function StartScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartScreenFactory.prototype.instantiate = function (screenManager) {
        return new StartScreen(screenManager);
    };
    return StartScreenFactory;
}(ScreenFactory));
var GameScreenFactory = /** @class */ (function (_super) {
    __extends(GameScreenFactory, _super);
    function GameScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScreenFactory.prototype.instantiate = function (screenManager) {
        return new GameScreen(screenManager);
    };
    return GameScreenFactory;
}(ScreenFactory));
var TwoPlayerTeamScreenFactory = /** @class */ (function (_super) {
    __extends(TwoPlayerTeamScreenFactory, _super);
    function TwoPlayerTeamScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoPlayerTeamScreenFactory.prototype.instantiate = function (screenManager) {
        return new TwoPlayerTeamScreen(screenManager);
    };
    return TwoPlayerTeamScreenFactory;
}(ScreenFactory));
var ScreenStateManager = /** @class */ (function () {
    function ScreenStateManager() {
    }
    ScreenStateManager.prototype.render = function () {
        this.screen.render();
    };
    ScreenStateManager.prototype.addEventListeners = function () {
        this.screen.addEventListeners();
    };
    ScreenStateManager.prototype.removeElems = function () {
        this.screen.removeElems();
    };
    ScreenStateManager.prototype.removeEventListeners = function () {
        this.screen.removeEventListeners();
    };
    ScreenStateManager.prototype.getScreen = function () {
        return this.screen;
    };
    ScreenStateManager.prototype.setScreen = function (newScreenState) {
        this.screen = newScreenState;
    };
    return ScreenStateManager;
}());
var StartScreen = /** @class */ (function () {
    function StartScreen(screenManager) {
        var _this = this;
        this.screenManager = screenManager;
        this.onePlayer = document.createElement("div");
        this.twoPlayer = document.createElement("div");
        this.onePlayer.classList.add("start", "screen", "poneselect");
        this.twoPlayer.classList.add("start", "screen", "ptwoselect");
        this.onePlayer.textContent = "This is the start screen, click to go to Game Screen";
        this.twoPlayer.textContent = "This is the start screen, click to go to Player Two Select Screen";
        this.onePlayerClickHandler = function () {
            var gameFactory = new GameScreenFactory();
            var gameScreen = gameFactory.creationLogic(_this.screenManager);
            _this.screenManager.setScreen(gameScreen);
            _this.removeEventListeners();
            _this.removeElems();
        };
        this.twoPlayerClickHandler = function () {
            var twoPlayerFactory = new TwoPlayerTeamScreenFactory();
            var twoPlayerScreen = twoPlayerFactory.creationLogic(_this.screenManager);
            _this.screenManager.setScreen(twoPlayerScreen);
            _this.removeEventListeners();
            _this.removeElems();
        };
    }
    StartScreen.prototype.render = function () {
        document.body.appendChild(this.onePlayer);
        document.body.appendChild(this.twoPlayer);
    };
    StartScreen.prototype.addEventListeners = function () {
        this.onePlayer.addEventListener("click", this.onePlayerClickHandler);
        this.twoPlayer.addEventListener("click", this.twoPlayerClickHandler);
    };
    StartScreen.prototype.removeEventListeners = function () {
        this.onePlayer.removeEventListener("click", this.onePlayerClickHandler);
        this.twoPlayer.removeEventListener("click", this.twoPlayerClickHandler);
    };
    StartScreen.prototype.removeElems = function () {
        this.onePlayer.remove();
        this.twoPlayer.remove();
    };
    return StartScreen;
}());
var GameScreen = /** @class */ (function () {
    function GameScreen(screenManager) {
        this.screenManager = screenManager;
        this.game = document.createElement("div");
        this.game.classList.add("screen", "game");
        this.game.textContent = "This is the game screen";
    }
    GameScreen.prototype.render = function () {
        document.body.appendChild(this.game);
    };
    GameScreen.prototype.addEventListeners = function () {
        console.log("game screen finally...");
    };
    GameScreen.prototype.removeEventListeners = function () {
        throw new Error("Method not implemented.");
    };
    GameScreen.prototype.removeElems = function () {
        throw new Error("Method not implemented.");
    };
    return GameScreen;
}());
var TwoPlayerTeamScreen = /** @class */ (function () {
    function TwoPlayerTeamScreen(screenManager) {
        this.screenManager = screenManager;
        this.xSelector = document.createElement("div");
        this.xSelector.classList.add("player-two-select", "screen", "x");
        this.xSelector.textContent = "Click for X";
        this.oSelector = document.createElement("div");
        this.oSelector.classList.add("player-two-select", "screen", "o");
        this.oSelector.textContent = "Click for O";
    }
    TwoPlayerTeamScreen.prototype.render = function () {
        document.body.appendChild(this.xSelector);
        document.body.appendChild(this.oSelector);
    };
    TwoPlayerTeamScreen.prototype.addEventListeners = function () {
        console.log("Two Player Selected...");
    };
    TwoPlayerTeamScreen.prototype.removeEventListeners = function () {
        throw new Error("Method not implemented.");
    };
    TwoPlayerTeamScreen.prototype.removeElems = function () {
        throw new Error("Method not implemented.");
    };
    return TwoPlayerTeamScreen;
}());
var screenManager = new ScreenStateManager();
var startScreenFactory = new StartScreenFactory();
var startScreen = startScreenFactory.creationLogic(screenManager);
screenManager.setScreen(startScreen);
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
