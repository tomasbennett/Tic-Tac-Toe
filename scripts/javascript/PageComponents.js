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
var PageFactory = /** @class */ (function () {
    function PageFactory() {
        this.components = [];
        this.componentsRemovable = [];
        this.componentsEventListener = [];
    }
    PageFactory.prototype.intialise = function () {
        this.createComponents();
        this.createComponentsRemovable();
        this.createComponentEventListener();
        this.components.forEach(function (elem) {
            elem.render();
        });
        this.componentsEventListener.forEach(function (elem) {
            elem.addEventListeners();
        });
    };
    return PageFactory;
}());
var StartPage = /** @class */ (function (_super) {
    __extends(StartPage, _super);
    function StartPage() {
        var _this = _super.call(this) || this;
        _this.onePlayerSelect = new OnePlayerSelect();
        _this.twoPlayerSelect = new TwoPlayerSelect();
        return _this;
    }
    StartPage.prototype.createComponents = function () {
        this.components.push(this.onePlayerSelect);
        this.components.push(this.twoPlayerSelect);
    };
    StartPage.prototype.createComponentsRemovable = function () {
        this.componentsRemovable.push(this.onePlayerSelect);
        this.componentsRemovable.push(this.twoPlayerSelect);
    };
    StartPage.prototype.createComponentEventListener = function () {
        this.componentsEventListener.push(this.onePlayerSelect);
        this.componentsEventListener.push(this.twoPlayerSelect);
    };
    return StartPage;
}(PageFactory));
var GamePage = /** @class */ (function (_super) {
    __extends(GamePage, _super);
    function GamePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePage.prototype.createComponents = function () {
        throw new Error("Method not implemented.");
    };
    GamePage.prototype.createComponentsRemovable = function () {
        throw new Error("Method not implemented.");
    };
    GamePage.prototype.createComponentEventListener = function () {
        throw new Error("Method not implemented.");
    };
    return GamePage;
}(PageFactory));
var OnePlayerSelect = /** @class */ (function () {
    function OnePlayerSelect() {
        this.onePlayerSelectButton = document.createElement("div");
        this.onePlayerSelectButton.classList.add("start", "screen", "poneselect");
        this.onePlayerSelectButton.textContent = "This is the start screen, click to go to Game Screen";
    }
    OnePlayerSelect.prototype.removeElem = function () {
        this.onePlayerSelectButton.remove();
    };
    OnePlayerSelect.prototype.addEventListeners = function () {
    };
    OnePlayerSelect.prototype.removeEventListeners = function () {
    };
    OnePlayerSelect.prototype.render = function () {
        document.body.appendChild(this.onePlayerSelectButton);
    };
    return OnePlayerSelect;
}());
var TwoPlayerSelect = /** @class */ (function () {
    function TwoPlayerSelect() {
        this.twoPlayerSelectButton = document.createElement("div");
        this.twoPlayerSelectButton.classList.add("start", "screen", "ptwoselect");
        this.twoPlayerSelectButton.textContent = "This is the start screen, click to go to Player Two Select Screen";
    }
    TwoPlayerSelect.prototype.removeElem = function () {
        this.twoPlayerSelectButton.remove();
    };
    TwoPlayerSelect.prototype.addEventListeners = function () {
        throw new Error("Method not implemented.");
    };
    TwoPlayerSelect.prototype.removeEventListeners = function () {
        throw new Error("Method not implemented.");
    };
    TwoPlayerSelect.prototype.render = function () {
        document.body.appendChild(this.twoPlayerSelectButton);
    };
    return TwoPlayerSelect;
}());
var startPage = new StartPage();
startPage.intialise();
// class NullComponent implements IComponent {
//     render(): void {
//         return;
//     }
// }
// class NullComponentRemovable implements IComponentRemovable {
//     removeElem(): void {
//         return;
//     }
//     render(): void {
//         return;
//     }
// }
// class NullComponentEventListener implements IComponentEventListener {
//     constructor(factory: PageFactory) {}
//     addEventListeners(): void {
//         return;
//     }
//     removeEventListeners(): void {
//         return;
//     }
//     render(): void {
//         return;
//     }
// }
