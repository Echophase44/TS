"use strict";
////////////////////////// GENERIC TYPES //////////////////////////////////////
const names = []; //A type that is connected to another type. //An array that stores strings, or numbers, etc.
////////////////////////// GENERIC FUNCTIONS //////////////////////////////////////
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merge({ name: "John" }, { age: 26 });
//mergedObj.name //Won't work because TS doesn't know that these properties would exsist. So we have to use a generic
////////////////////////// GENERIC CLASS //////////////////////////////////////
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage(); //Only allows storage of strings
textStorage.addItem("Looy");
textStorage.addItem("Viton");
console.log(textStorage.getItems());
//const numberStorage = new DataStorage<number>() // Only stores numbers
