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
var ThinDough = /** @class */ (function () {
    function ThinDough() {
    }
    ThinDough.prototype.description = function () {
        return "This is thin dough selected on the pizza";
    };
    return ThinDough;
}());
var ThickDough = /** @class */ (function () {
    function ThickDough() {
    }
    ThickDough.prototype.description = function () {
        return "This is thick dough selected on the pizza";
    };
    return ThickDough;
}());
var RedSauce = /** @class */ (function () {
    function RedSauce() {
    }
    RedSauce.prototype.description = function () {
        return "Red Sauce selected";
    };
    return RedSauce;
}());
var BBQSauce = /** @class */ (function () {
    function BBQSauce() {
    }
    BBQSauce.prototype.description = function () {
        return "BBQ Sauce selected";
    };
    return BBQSauce;
}());
var RegularCheese = /** @class */ (function () {
    function RegularCheese() {
    }
    RegularCheese.prototype.description = function () {
        return "Regular cheese selected";
    };
    return RegularCheese;
}());
var GlutenFreeCheese = /** @class */ (function () {
    function GlutenFreeCheese() {
    }
    GlutenFreeCheese.prototype.description = function () {
        return "Gluten free cheese selected";
    };
    return GlutenFreeCheese;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.instantiationLogic = function () {
        this.prep();
        this.bake();
        this.deliver();
    };
    Factory.prototype.prep = function () {
        console.log("Prep stage includes ".concat(this.doughTopping.description(), ", ").concat(this.cheeseTopping.description(), " and ").concat(this.sauceTopping.description()));
    };
    ;
    Factory.prototype.bake = function () {
        console.log("Baking Pizza now...");
    };
    ;
    Factory.prototype.deliver = function () {
        console.log("Delivering Pizza now...");
    };
    ;
    return Factory;
}());
var PizzaOneFactory = /** @class */ (function (_super) {
    __extends(PizzaOneFactory, _super);
    function PizzaOneFactory() {
        var _this = _super.call(this) || this;
        _this.doughTopping = new ThinDough();
        _this.sauceTopping = new RedSauce();
        _this.cheeseTopping = new RegularCheese();
        return _this;
    }
    return PizzaOneFactory;
}(Factory));
var PizzaTwoFactory = /** @class */ (function (_super) {
    __extends(PizzaTwoFactory, _super);
    function PizzaTwoFactory() {
        var _this = _super.call(this) || this;
        _this.doughTopping = new ThickDough();
        _this.sauceTopping = new BBQSauce();
        _this.cheeseTopping = new GlutenFreeCheese();
        return _this;
    }
    return PizzaTwoFactory;
}(Factory));
var pizzaTypeTwo = new PizzaTwoFactory();
pizzaTypeTwo.instantiationLogic();
