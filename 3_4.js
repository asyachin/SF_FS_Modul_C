// Parent function for electrical devices
function ElectricalDevice(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Methods for turning on and off the device
ElectricalDevice.prototype.turnOn = function () {
  if (!this.pluggedIn) {
    console.log(`${this.name} is turned on.`);
    this.pluggedIn = true;
  } else {
    console.log(`${this.name} is already turned on.`);
  }
};

ElectricalDevice.prototype.turnOff = function () {
  if (this.pluggedIn) {
    console.log(`${this.name} is turned off.`);
    this.pluggedIn = false;
  } else {
    console.log(`${this.name} is already turned off.`);
  }
};

// Child functions for specific devices
function DeskLamp(name, power, brightness) {
  ElectricalDevice.call(this, name, power);
  this.brightness = brightness;
}

function Computer(name, power, brand) {
  ElectricalDevice.call(this, name, power);
  this.brand = brand;
}

// Creating a delegation link [[Prototype]]
DeskLamp.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype = Object.create(ElectricalDevice.prototype);

// Adding custom methods
DeskLamp.prototype.adjustBrightness = function (level) {
  this.brightness = level;
  console.log(`${this.name} brightness set to ${this.brightness}%`);
};

Computer.prototype.specs = function () {
  console.log(`${this.name} brand: ${this.brand}`);
};

// Creating instances of devices
const lamp = new DeskLamp("Desk Lamp", 30, 50);
const pc = new Computer("Computer", 500, "Dell");

// Turning on devices and calculating power consumption
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
console.log(`Total power consumption: ${totalPower} Watts`);

// Adjusting lamp brightness and displaying computer information
lamp.adjustBrightness(75);
pc.specs();