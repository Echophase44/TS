

function Logger(constructor: Function) {
  console.log("Logging...")
}


@Logger // The decorator, it runs when JS finds it, not when a class is called, and runs before the class is assigned.
class Hero {
  name = "Munson"

  constructor() {
    console.log("Creating a new Hero...")
  }


}

const guile = new Hero()