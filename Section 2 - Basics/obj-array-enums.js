"use strict";
//This is an option, but not super necessary
const person = {
    name: "Nick",
    age: 30
};
console.log(person.name);
//We should let TS infer the types
const person2 = {
    name: "Beck",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [10, "strong"]
};
console.log(person2.name);
for (const hobby of person2.hobbies) {
    console.log(hobby);
}
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //Assigns ADMIN = 0, READ_ONLY = 1, etc. //Assigns labels to numbers
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR} add the assignment operator to assign specific numbers
// Assigning the first as = 5 will make READ_ONLY to 6, and AUTHOR as 7
const person3 = {
    name: "Fiona",
    age: 32,
    role: Role.ADMIN
};
console.log(person3.role);
