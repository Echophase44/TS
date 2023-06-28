//This is an option, but not super necessary
var person = {
    name: "Nick",
    age: 30
};
console.log(person.name);
//We should let TS infer the types
var person2 = {
    name: "Beck",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [10, "strong"]
};
console.log(person2.name);
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var person3 = {
    name: "Fiona",
    age: 32,
    role: Role.ADMIN
};
console.log(person3.role);
