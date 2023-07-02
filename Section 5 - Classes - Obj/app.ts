interface Fighter {
  name: string; //Interface can have the properties, but not the values
  readonly age: number; //Readonly is the only keyword you can use in interfaces, "set it once and then you cant change it."

  defaultAttack(damage: number):number ;
}

let fighter1: Fighter;


// Based on the blueprint above, it will give errors if it doesn't have everything.
fighter1 = {
  name: "Vilago",
  age: 27,

  defaultAttack(damage: number){
    return damage
  }
}

//////////////////////////CLASSES + INTERFACE /////////////////////
// Has to have all the same conditions as Figther, plus you can add what you want. 
class Captian implements Fighter {
  name: string;
  age: number;

  constructor(n: string, age: number){
      this.name = n
      this.age = age
  }

  defaultAttack(damage: number): number {
    return damage
  }
}

//class Captian implements Fighter, Sorcerer, etc. //if you want to mulitple 

//you can also extent mulitple interfaces 