// Intersection Type / combining custom types

type Admin = {
  name: string,
  privileges: string[],
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee; // The intersection

const user3: ElevatedEmployee = {
  name: "Steve",
  privileges: ["Guard"],
  startDate: new Date()
}

////////////////// TYPE GUARDS ///////////////////

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee){
  console.log("Name: " + emp.name)
  if("privileges" in emp) {                   //This is the type guard, because we don't know if it'll be Admin or Employee type
    console.log("Privileges: " + emp.privileges)
  }
}

/////////////////// Another way to type guard ////////////////

class Car {
  drive() {
    console.log("I'm moving!")
  }
}

class Truck {
  drive() {
    console.log("This thing is so slow!")
  }

  loadCargo(amount: number){
    console.log("Loading cargo: " + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
  vehicle.drive()

  if(vehicle instanceof Truck){ // The other Type Guard
    vehicle.loadCargo(1000)
  }
}


///////////////////////// DISCRIMINATED UNION ///////////////////////////

interface Bird {
  type: "bird", // The discriminated Union - Adding an extra "type" property just to help narrow down potential errors
  flyingSpeed: number
}

interface Horse {
  type: "horse", // One common property in the union, that makes up the union
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed
      break
  }
  console.log("Moving at speed: " + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 45})

///////////////////////// Type Casting ///////////////////////////

// const userInputElement = <HTMLInputElement>document.getElementById("user-input"); //Version 1
const userInputElement = document.getElementById("user-input")! as HTMLInputElement; //Version 2 - for use with React, the "!" in front tell TS that the element will never return "null"

userInputElement.value = "Hello."