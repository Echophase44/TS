let userInput: unknown;

userInput = 5;
userInput = "Hello";

function generateError(message: string, code: number): never{ //Because it's throwing an error and doesn't return anything
  throw {message: message, errorCode: code}
}

generateError("An error occurred!", 500)