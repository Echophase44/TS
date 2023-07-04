"use strict";
// Intersection Type / combining custom types
const user3 = {
    name: "Steve",
    privileges: ["Guard"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) { //This is the type guard, because we don't know if it'll be Admin or Employee type
        console.log("Privileges: " + emp.privileges);
    }
}
/////////////////// Another way to type guard ////////////////
class Car {
    drive() {
        console.log("I'm moving!");
    }
}
class Truck {
    drive() {
        console.log("This thing is so slow!");
    }
    loadCargo(amount) {
        console.log("Loading cargo: " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // The other Type Guard
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 45 });
///////////////////////// Type Casting ///////////////////////////
// const userInputElement = <HTMLInputElement>document.getElementById("user-input"); //Version 1
const userInputElement = document.getElementById("user-input"); //Version 2 - for use with React, the "!" in front tell TS that the element will never return "null"
userInputElement.value = "Hello.";
