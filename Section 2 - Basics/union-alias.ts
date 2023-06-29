// Union Types

function combine(input1: string | number, input2: string | number) {
  let result = 0;
  if (typeof input1 === "number" && typeof input2 === 'number'){
    result = input1 + input2;
  }
  return result
}

console.log(combine(3, 45))


 // Literal Types
function combineLiteral(input1: string | number, input2: string | number, resultType: "as-number" | "as-text") {
  let result = 0;
  if (typeof input1 === "number" && typeof input2 === 'number'){
    result = input1 + input2;
  }
  return result
}

console.log(combineLiteral(34, 25, "as-text")) // The literal parameters only allow specific strings to go through to alter the output


//Type Alias

type combineable = number | string

function customType(input: combineable){
  console.log(input)
}

//Example 2
type User = { name: string; age: number };

const u1: User = { name: 'Max', age: 30 };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  if( checkAge > user.age){
    console.log("You're not that old!")
  }
}


console.log(greet(u1))
isOlder(u1, 33)
