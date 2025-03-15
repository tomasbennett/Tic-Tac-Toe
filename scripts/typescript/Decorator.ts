interface Coffee {
    getCost(): number;
    getDescription(): string;
    getTemperature(): string;
  }
  

// Abstract decorator class
abstract class CoffeeDecorator implements Coffee {
    constructor(protected decoratedCoffee: Coffee) {}
  
    // Decorated methods: overridden by concrete decorators to add behavior.
    abstract getCost(): number;
    abstract getDescription(): string;
  
    // Non-decorated method: simply delegates to the wrapped object.
    getTemperature(): string {
      return this.decoratedCoffee.getTemperature();
    }
  }
  
  // A concrete decorator that adds milk to the coffee.
  class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 0.5;
    }
  
    getDescription(): string {
      return this.decoratedCoffee.getDescription() + ", milk";
    }
  }
  
  // A concrete component implementation.
  class SimpleCoffee implements Coffee {
    getCost(): number {
      return 2;
    }
  
    getDescription(): string {
      return "Simple coffee";
    }
  
    getTemperature(): string {
      return "Hot";
    }
  }
  
  // Usage:
  const myCoffee: Coffee = new MilkDecorator(new SimpleCoffee());
  console.log(myCoffee.getDescription()); // "Simple coffee, milk"
  console.log(myCoffee.getCost());        // 2.5
  console.log(myCoffee.getTemperature()); // "Hot" – this call is not decorated.
  