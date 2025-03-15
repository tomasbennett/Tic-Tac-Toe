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
// Abstract decorator class
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    // Non-decorated method: simply delegates to the wrapped object.
    CoffeeDecorator.prototype.getTemperature = function () {
        return this.decoratedCoffee.getTemperature();
    };
    return CoffeeDecorator;
}());
// A concrete decorator that adds milk to the coffee.
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MilkDecorator.prototype.getCost = function () {
        return this.decoratedCoffee.getCost() + 0.5;
    };
    MilkDecorator.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ", milk";
    };
    return MilkDecorator;
}(CoffeeDecorator));
// A concrete component implementation.
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 2;
    };
    SimpleCoffee.prototype.getDescription = function () {
        return "Simple coffee";
    };
    SimpleCoffee.prototype.getTemperature = function () {
        return "Hot";
    };
    return SimpleCoffee;
}());
// Usage:
var myCoffee = new MilkDecorator(new SimpleCoffee());
console.log(myCoffee.getDescription()); // "Simple coffee, milk"
console.log(myCoffee.getCost()); // 2.5
console.log(myCoffee.getTemperature()); // "Hot" – this call is not decorated.
