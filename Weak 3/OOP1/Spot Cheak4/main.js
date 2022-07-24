class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    Vehicle.countCars++;
  }

  static calculateMoney() {
    console.log(Vehicle.countCars * 30000);
  }
}
Vehicle.countCars = 0;

const honda = new Vehicle(4, 5, 150);
const honda1 = new Vehicle(4, 5, 150);
Vehicle.calculateMoney();
