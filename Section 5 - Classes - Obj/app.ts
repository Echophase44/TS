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













// CONSTRUCTOR SHORTHAND

class Kingdom {
  // public name: string;
  // private queen: string;

  constructor(public name: string, private queen: string) { // This is shorthand for the double initialization you see. You have to specify the "public" though.
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