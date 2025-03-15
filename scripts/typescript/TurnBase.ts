interface Dough {
    description(): string;
}

interface Sauce {
    description(): string;
}

interface Cheese {
    description(): string;
}

class ThinDough implements Dough {
    description(): string {
        return "This is thin dough selected on the pizza";
    }
}

class ThickDough implements Dough {
    description(): string {
        return "This is thick dough selected on the pizza";
    }
}

class RedSauce implements Sauce {
    description(): string {
        return "Red Sauce selected";
    }
}

class BBQSauce implements Sauce {
    description(): string {
        return "BBQ Sauce selected";
    }
}

class RegularCheese implements Cheese {
    description(): string {
        return "Regular cheese selected";
    }
}

class GlutenFreeCheese implements Cheese {
    description(): string {
        return "Gluten free cheese selected";
    }
}


abstract class Factory {
    doughTopping!: Dough;
    sauceTopping!: Sauce;
    cheeseTopping!: Cheese;

    constructor(){}

    instantiationLogic(): void {
        this.prep();
        this.bake();
        this.deliver();
    }

    prep(): void {
        console.log(`Prep stage includes ${this.doughTopping.description()}, ${this.cheeseTopping.description()} and ${this.sauceTopping.description()}`);
    };
    bake(): void {
        console.log("Baking Pizza now...");
    };
    deliver(): void {
        console.log("Delivering Pizza now...");
    };
}

class PizzaOneFactory extends Factory {
    constructor() {
        super();
        this.doughTopping = new ThinDough();
        this.sauceTopping = new RedSauce();
        this.cheeseTopping = new RegularCheese();
    }
}

class PizzaTwoFactory extends Factory {
    constructor() {
        super();
        this.doughTopping = new ThickDough();
        this.sauceTopping = new BBQSauce();
        this.cheeseTopping = new GlutenFreeCheese();
    }
}


const pizzaTypeTwo: Factory = new PizzaTwoFactory();
pizzaTypeTwo.instantiationLogic();






