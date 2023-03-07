const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const filtro = { id: person.id, age: person.age }
const json = JSON.parse(JSON.stringify(filtro));

console.log(json); // Should return: { id: 1, age: 25 }