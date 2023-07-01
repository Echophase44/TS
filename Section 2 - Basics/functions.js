"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//Void Return type -- doesn't return anything
function printResult(num) {
    console.log("Result:" + num);
}
printResult(add(5, 12));
// Function Type
// let combineValues: Function; // Lets any function be assigned to it
let combineValues; // combineValues should only accept a function that accepts two arguements and are numbers, and returns a number.
// combineValues = 5;
combineValues = add;
console.log(combineValues(8, 8));
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
