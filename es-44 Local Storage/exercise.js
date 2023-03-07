const user = {
  id: 1,
  name: "John",
  age: 25,
};
const userLocal = JSON.parse(userLocalStorage.getItem('user'));
console.log(userLocal);
