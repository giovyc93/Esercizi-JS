const user = {
  id: 1,
  name: "John",
  age: 25,
};
const userFromStorage = JSON.parse(localStorage.getItem('user'));
console.log(userFromStorage);
