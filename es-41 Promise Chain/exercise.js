const isLogged = true;

const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogged) {
          const randomNumber = Math.random();
          resolve(randomNumber);
        } else {
          reject('User is not logged in');
        }
      }, 1000);
    });
  };
  
  const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 0.5) {
          resolve({ name: "John", age: 24 });
        } else {
          reject('Number is less than or equal to 0.5');
        }
      }, 1000);
    });
  };
 
  firstPromise(isLogged)
    .then(result => {
      console.log(`Random number generated: ${result}`);
      return secondPromise(result);
    })
    .then(result => {
      console.log(`Name: ${result.name}, Age: ${result.age}`);
    })
    .catch(error => {
      console.error(error);
    });
