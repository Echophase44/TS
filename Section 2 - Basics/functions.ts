function add(n1: number, n2: number): number{ //to specify the return type, but its better to let TS infer.
  return n1 + n2
}

//Void Return type -- doesn't return anything

function printResult(num: number): void{
  console.log("Result:" + num)
}

printResult(add(5, 12))

// Function Type

// let combineValues: Function; // Lets any function be assigned to it

let combineValues: (a: number, b: number) => number; // combineValues should only accept a function that accepts two arguements and are numbers, and returns a number.
// combineValues = 5;

combineValues = add;

console.log(combineValues(8,8))

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });