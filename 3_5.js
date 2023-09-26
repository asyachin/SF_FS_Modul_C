// Parent class for electrical devices
class ElectricalDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  // Methods for turning the device on and off
  turnOn() {
    if (!this.pluggedIn) {
      console.log(`${this.name} is turned on.`);
      this.pluggedIn = true;
    } else {
      console.log(`${this.name} is already turned on.`);
    }
  }

  turnOff() {
    if (this.pluggedIn) {
      console.log(`${this.name} is turned off.`);
      this.pluggedIn = false;
    } else {
      console.log(`${this.name} is already turned off.`);
    }
  }
}

// Child class for a desk lamp
class DeskLamp extends ElectricalDevice {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  // Additional method for adjusting brightness
  adjustBrightness(level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${this.brightness}%`);
  }
}

// Child class for a computer
class Computer extends ElectricalDevice {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

  // Additional method for displaying computer specs
  specs() {
    console.log(`${this.name} brand: ${this.brand}`);
  }
}

// Creating instances of devices
const lamp = new DeskLamp("Desk Lamp", 30, 50);
const pc = new Computer("Computer", 500, "Dell");

// Turning on the devices and calculating total power consumption
lamp.turnOn();
pc.turnOn();

let totalPower = 0;

function calculateTotalPower() {
  totalPower = 0;
  if (lamp.pluggedIn) {
    totalPower += lamp.power;
  }
  if (pc.pluggedIn) {
    totalPower += pc.power;
  }
}

calculateTotalPower();
console.log(`Total power consumption: ${totalPower} W`);

// Adjusting lamp brightness and displaying computer specs
lamp.adjustBrightness(75);
pc.specs();