let person = { name: "Mohammad" };

Object.defineProperty(person, "name", {
  writable: false,
});

person.name = "Rezaei";

console.log(person);

// let objectBase = Object.getPrototypeOf(person);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

// console.log(descriptor);
