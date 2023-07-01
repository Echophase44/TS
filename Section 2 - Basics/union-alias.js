"use strict";
// Union Types
function combine(input1, input2) {
    let result = 0;
    if (typeof input1 === "number" && typeof input2 === 'number') {
        result = input1 + input2;
    }
    return result;
}
console.log(combine(3, 45));
// Literal Types
function combineLiteral(input1, input2, resultType) {
    let result = 0;
    if (typeof input1 === "number" && typeof input2 === 'number') {
        result = input1 + input2;
    }
    return result;
}
console.log(combineLiteral(34, 25, "as-text")); // The literal parameters only allow specific strings to go through to alter the output
function customType(input) {
    console.log(input);
}
const u1 = { name: 'Max', age: 30 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    if (checkAge > user.age) {
        console.log("You're not that old!");
    }
}
console.log(greet(u1));
isOlder(u1, 33);
