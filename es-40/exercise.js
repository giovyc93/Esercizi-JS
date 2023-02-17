const promise = new Promise((resolve, reject) => {
    const number = 15;
    if (number > 10) {
      resolve('Number is greater than 10');
    } else {
      reject('Number is less than or equal to 10');
    }
  });
  
  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
