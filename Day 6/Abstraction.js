class Car {
  #engineStarted;

  constructor(brand) {
    this.brand = brand;
    this.#engineStarted = false; // hidden detail
  }

  // Public method: abstraction
  startCar() {
    this.#startEngine();
    console.log(`${this.brand} car started`);
  }

  drive() {
    if (!this.#engineStarted) {
      console.log("Please start the car first!");
      return;
    }
    console.log(`${this.brand} is driving on the road`);
  }

  stopCar() {
    this.#engineStarted = false;
    console.log(`${this.brand} car stopped`);
  }

  // Private implementation (hidden from user)
  #startEngine() {
    this.#engineStarted = true;
    console.log("Engine started");
  }
}

// Usage
const myCar = new Car("Tesla");
myCar.drive();       
myCar.startCar();   
myCar.drive();      
myCar.stopCar();    
