class  Department {
  name: string;
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department){ //this: Department is an extra type saftey incase other variables try to call the "describe" method
    console.log("Department: " + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("Accounting");

accounting.describe();


// This is referring to the "this: Department" special type above. Without the "this: Department", the accountingCopy will return "undefined" or give a type error.
// const accountingCopy = {name: "Dummy", describe: accounting.describe}

// accountingCopy.describe()


///////////////////////////////////////////////////////////////////////////////////////////////////////


// CONSTRUCTOR SHORTHAND

class Kingdom {
  // public name: string;
  // private queen: string;

  constructor(public readonly name: string, private queen: string) { // This is shorthand for the double initialization you see. You have to specify the "public" though.
    // this.name = name;
    // this.queen = queen;
  }

  announceKingdom() {
    console.log("My Kingdom: " + this.name)
    console.log(`My Queen: ${this.queen}`)
  }
}

const black = new Kingdom("Black Death", "Lilith")

black.announceKingdom();

// readonly is another property that can add some extra type saftey. 


/////////////////////////////INHERITANCE///////////////////////////////////////////

class Region extends Kingdom {
  private soldiers: string[];

  constructor(id: string, queen: string, soldiers: string[]) {
    super(id, queen); //calls the constructor of the base class to pass those into - also has to be called first before the new ones
    this.soldiers = soldiers
  }

  printSoldiers(){
    console.log(this.soldiers)
  }
}

const Ravnica = new Region("Red", "Auelia", ["Lt. Herion", "Cpt. Florian"])

Ravnica.printSoldiers()