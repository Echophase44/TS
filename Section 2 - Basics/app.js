"use strict";
let userInput;
userInput = 5;
userInput = "Hello";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
