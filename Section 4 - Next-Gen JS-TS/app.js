"use strict";
// Doing the "number = 1" puts a default of 1 for 'b'
const bestAdd = (a, b = 1) => a + b;
//Rest parameters
const restAdd = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(restAdd(5, 14, 51, 15));
// object destructuring - adding the colon after "firstName" renames the variable to something else you could want.
const aPerson = {
    firstName: "Nick",
    age: 30
};
const { firstName: userName, age } = aPerson;
