const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"
// essendoci due "cartelle che utilizzano lo stesso contenuto possiamo modificarlo selezionando (cartella.keys) ed insire il nuovo value

console.log(person1);
console.log(person2);
