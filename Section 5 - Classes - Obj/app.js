"use strict";
let fighter1;
// Based on the blueprint above, it will give errors if it doesn't have everything.
fighter1 = {
    name: "Vilago",
    age: 27,
    defaultAttack(damage) {
        return damage;
    }
};
//////////////////////////CLASSES + INTERFACE /////////////////////
// Has to have all the same conditions as Figther, plus you can add what you want. 
class Captian {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    defaultAttack(damage) {
        return damage;
    }
}
//class Captian implements Fighter, Sorcerer, etc. //if you want to mulitple 
//you can also extent mulitple interfaces 
