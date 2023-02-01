class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}


const developer = new Person(1, 'Mario', 'Rossi', 25);

const stringa = JSON.stringify(developer)
const json = JSON.parse(stringa)
console.log(typeof (stringa));
console.log(typeof (json));
console.log(json);
// Print developer as json object