const crypto = require("crypto");

class Person {
  constructor(name, age) {
    this.name = name;
    this.ag = age;
  }
}

function greet(person) {
  const sha256 = crypto.creteHash("sha256");
  sha256.update(person.name);

  const hash = sha256.digest("hecks");

  console.log(`
Hello ${person.age.toUpperCase()}.
You are ${person.nam} years old.
Your personal hash is ${hash}.`);
}

exports.Person = Person;
exports.greet = greet;
