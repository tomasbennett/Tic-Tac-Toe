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
    ScreenFactory.prototype.creationLogic = function () {
        var screenName = this.constructor.name;
        var screen = ScreenFactory.cache.get(screenName);
        if (!screen) {
            screen = this.instantiate();
            ScreenFactory.cache.set(screenName, screen);
        }
        screen.render();
        screen.addEventListeners();
    };
    ScreenFactory.cache = new Map();
    return ScreenFactory;
}());
var StartScreenFactory = /** @class */ (function (_super) {
    __extends(StartScreenFactory, _super);
    function StartScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartScreenFactory.prototype.instantiate = function () {
        return new StartScreen();
    };
    return StartScreenFactory;
}(ScreenFactory));
var GameScreenFactory = /** @class */ (function (_super) {
    __extends(GameScreenFactory, _super);
    function GameScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScreenFactory.prototype.instantiate = function () {
        return new GameScreen();
    };
    return GameScreenFactory;
}(ScreenFactory));
var TwoPlayerTeamScreenFactory = /** @class */ (function (_super) {
    __extends(TwoPlayerTeamScreenFactory, _super);
    function TwoPlayerTeamScreenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoPlayerTeamScreenFactory.prototype.instantiate = function () {
        return new TwoPlayerTeamScreen();
    };
    return TwoPlayerTeamScreenFactory;
}(ScreenFactory));
var StartScreen = /** @class */ (function () {
    function StartScreen() {
        this.onePlayer = document.createElement("div");
        this.twoPlayer = document.createElement("div");
        this.onePlayer.classList.add("start", "screen", "poneselect");
        this.twoPlayer.classList.add("start", "screen", "ptwoselect");
        this.onePlayer.textContent = "This is the start screen, click to go to Game Screen";
        this.twoPlayer.textContent = "This is the start screen, click to go to Player Two Select Screen";
    }
    StartScreen.prototype.render = function () {
        document.body.appendChild(this.onePlayer);
        document.body.appendChild(this.twoPlayer);
    };
    StartScreen.prototype.addEventListeners = function () {
        this.onePlayer.addEventListener("click", this.changePage.bind(this, new GameScreenFactory()));
        this.twoPlayer.addEventListener("click", this.changePage.bind(this, new TwoPlayerTeamScreenFactory()));
    };
    StartScreen.prototype.changePage = function (newPage) {
        newPage.creationLogic();
        this.removeEventListeners();
        this.removeElems();
    };
    StartScreen.prototype.removeEventListeners = function () {
        this.onePlayer.removeEventListener("click", this.changePage.bind(this, new GameScreenFactory()));
        this.twoPlayer.removeEventListener("click", this.changePage.bind(this, new TwoPlayerTeamScreenFactory()));
    };
    StartScreen.prototype.removeElems = function () {
        this.onePlayer.remove();
        this.twoPlayer.remove();
    };
    return StartScreen;
}());
var GameScreen = /** @class */ (function () {
    function GameScreen() {
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
    function TwoPlayerTeamScreen() {
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
var startScreenFactory = new StartScreenFactory();
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
