////////////////////////// GENERIC TYPES //////////////////////////////////////

const names: Array<string> = [] //A type that is connected to another type. //An array that stores strings, or numbers, etc.

function merge<T extends {}, U>(a: T, b: U) { 
  return Object.assign(a, b)
}

////////////////////////// GENERIC FUNCTIONS //////////////////////////////////////

const mergedObj = merge({name: "John"}, {age: 26})

//mergedObj.name //Won't work because TS doesn't know that these properties would exsist. So we have to use a generic